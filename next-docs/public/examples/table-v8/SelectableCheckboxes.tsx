import { Checkbox } from "@heathmont/moon-core-tw";
import { Table } from "@heathmont/moon-table-v8-tw";
import { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import React from "react";

type DataTypeHelper = {
  firstName: string,
  lastName: string,
  age: string,
  visits: string,
  progress: string,
  status: number,
  activity: number,
}

const makeData = (length: number) => {
  return Array.from('_'.repeat(length)).map((_, index) => {
    return {
      firstName: 'Test',
      lastName: 'Test',
      age: <span>{Math.floor(index * 30)}</span>,
      visits: <span>{Math.floor(index * 100)}</span>,
      progress: <span>{Math.floor(index * 100)}</span>,
      status: Math.floor(index * 100),
      activity: Math.floor(index * 100),
    };
  });
};

const preset: RowSelectionState = {
  1: true,
  3: true,
  4: true,
};

const Example = () => {
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(preset);
  const [data, setData] = React.useState(() => makeData(10));

  const refreshData = () => {
    document.location.reload();
  }

  const columns = React.useMemo<ColumnDef<{}, DataTypeHelper>[]>(() => [
    {
      id: 'select',
      header: ({ table }) => (
        <div className="px-1">
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    {
      header: () => 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: () => 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: () => 'Age',
      accessorKey: 'age',
      cell: props => (props.getValue()),
    },
    {
      header: () => 'Visits',
      accessorKey: 'visits',
      cell: props => (props.getValue()),
    },
    {
      header: () => 'Progress',
      accessorKey: 'progress',
      cell: props => (props.getValue()),
    },
    {
      header: () => 'Activity',
      accessorKey: 'activity',
    },
    {
      header: () => 'Status',
      accessorKey: 'status',
    },
  ], []);

  return (
    <>
      <Table
        columns={columns}
        data={data}
        width={800}
        layout="stretched-auto"
        state={{ rowSelection }}
        onRowSelectionChange={setRowSelection}
        isSelectable={true}
      />
      <div>
        <button onClick={refreshData}>Refresh Data</button>
      </div>
      <pre>{JSON.stringify(rowSelection, null, 2)}</pre>
    </>
  );
}

export default Example;
