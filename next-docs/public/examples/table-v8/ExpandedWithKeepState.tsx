import React, { useCallback, useEffect } from 'react'
import { Table } from "@heathmont/moon-table-v8-tw";
import { ExpandedState, ColumnDef } from '@tanstack/react-table';
import { ControlsChevronDown, ControlsChevronRight } from '@heathmont/moon-icons-tw';

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    firstName: 'FirstName',
    lastName: 'LastName',
    age: 40,
    visits: 1000,
    progress: 100,
    status: 'complicated',
  }
}

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

const PREFIX = 'example_unique_name';

function App() {

  const columns = React.useMemo<ColumnDef<{}, Person>[]>(
    () => [
      {
        header: 'Name',
        footer: props => props.column.id,
        columns: [
          {
            accessorKey: 'firstName',
            header: ({ table }) => (
              <>
                <button
                  {...{
                    onClick: table.getToggleAllRowsExpandedHandler(),
                  }}
                >
                  {table.getIsAllRowsExpanded() ? <ControlsChevronDown /> : <ControlsChevronRight /> }
                </button>{' '}
                First Name
              </>
            ),
            cell: ({ row, getValue }) => (
              <div
                style={{
                  paddingLeft: `${row.depth * 2}rem`,
                }}
              >
                <>
                  {row.getCanExpand() ? (
                    <button
                      {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: 'pointer' },
                      }}
                    >
                      {row.getIsExpanded() ? <ControlsChevronDown /> : <ControlsChevronRight />}
                    </button>
                  ) : (
                    '🔵'
                  )}{' '}
                  {getValue()}
                </>
              </div>
            ),
            footer: props => props.column.id,
          },
          {
            accessorFn: (row: Person) => row.lastName,
            id: 'lastName',
            cell: info => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: props => props.column.id,
          },
        ],
      },
      {
        header: 'Info',
        footer: props => props.column.id,
        columns: [
          {
            accessorKey: 'age',
            header: () => 'Age',
            footer: props => props.column.id,
          },
          {
            header: 'More Info',
            columns: [
              {
                accessorKey: 'visits',
                header: () => <span>Visits</span>,
                footer: props => props.column.id,
              },
              {
                accessorKey: 'status',
                header: 'Status',
                footer: props => props.column.id,
              },
              {
                accessorKey: 'progress',
                header: 'Profile Progress',
                footer: props => props.column.id,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const preset: ExpandedState = {
    '0': true,
    '0.2': true,
    '0.2.1': true
  };

  const [expanded, setExpanded] = React.useState<ExpandedState>(preset);
  const [data, setData] = React.useState(() => makeData(10, 5, 3));

  const refreshData = () => {
    /* storeExpandedState(PREFIX, expanded); */
    document.location.reload();
  }
/*
  const storeExpandedState = (
    prefix: string,
    data: ExpandedState
  ) => {
    localStorage.setItem(prefix, JSON.stringify(data));
  }

  const restoreTableState = (prefix: string) => {
    let states: ExpandedState = {};
    const storedData = localStorage.getItem(PREFIX)
    if (storedData === null) return;
    try {
      states = JSON.parse(storedData);
      setExpanded(states);
    } catch (e) {
    } finally {
      localStorage.removeItem(prefix);
      return states;
    }
  }

  useEffect(() => { restoreTableState(PREFIX) }, []);
*/
  const getSubRows = useCallback(({ subRows }: Person) => subRows, []);

  return (
    <>
      <Table
        columns={columns}
        data={data}
        width={800}
        layout='stretched-auto'
        state={{ expanded }}
        getSubRows={getSubRows}
        onExpandedChange={setExpanded}
        headerBackgroundColor='bg-goku'
      />
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
      <pre>{JSON.stringify(expanded, null, 2)}</pre>
    </>
  )
}

const Example = () => App();

export default Example;
