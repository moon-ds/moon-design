import React from "react";
import { Table } from "@heathmont/moon-table-v8-tw";
import { ColumnDef } from "@tanstack/react-table";

type DefaultHelper = {
  firstName: string,
  lastName: string,
  age: string,
  visits: string,
  progress: string,
  status: number,
  activity: number,
};

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

const Example = () => {
  const columns = React.useMemo<ColumnDef<{}, DefaultHelper>[]>(() => [
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
  const data = React.useMemo(() => makeData(5), []);

  return (
    <Table
      columns={columns}
      data={data}
    />
  );
}

export default Example;
