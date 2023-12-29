import { Tag } from "@heathmont/moon-core-tw";
import { Table } from "@heathmont/moon-table-v8-tw";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React, { useMemo } from "react";

type DataTypeHelper = {
  uuid: string,
  user: string,
  processTime: string,
  client: string,
  gameNameAndProvider: string,
  amount: number,
  currency: React.JSX.Element,
  status: React.JSX.Element,
}

const Example = () => {
  const columns = React.useMemo<ColumnDef<{}, DataTypeHelper>[]>(() => [
    {
      id: 'operation',
      header: () => 'Transactions',
      /* sticky: 'left', */
      columns: [
        {
          header: () => 'Transaction UUID',
          accessorKey: 'uuid'
        },
        {
          header: () => 'User & Supplier user',
          accessorKey: 'user'
        },
      ],
    },
    {
      id: 'info',
      header: () => 'Info',
      columns: [
        {
          header: () => 'Process time',
          accessorKey: 'processTime'
        },
        {
          header: () => 'Client',
          accessorKey: 'client'
        },
        {
          header: () => 'Game name & provider',
          accessorKey: 'gameNameAndProvider'
        },
        {
          header: () => 'Amount',
          accessorKey: 'amount'
        },
        {
          header: () => 'Currency',
          accessorKey: 'currency',
          cell: props => (props.getValue()),
        },
      ],
    },
    {
      id: 'status',
      header: () => 'Status',
      sticky: 'right',
      columns: [
        {
          header: () => 'Status',
          accessorKey: 'status',
          cell: props => (props.getValue()),
        },
      ]
    }
  ], []);

  const defaultColumn = {
    minSize: 10,
    size: 150,
    maxSize: Number.MAX_SAFE_INTEGER
  };

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        uuid: '84837d8ac654aa4689efa4649-84837d8ac654aa4689efa4649756454a5646545546d54f6546f546',
        user: 'aleksandr@heathmonitoring.com',
        processTime: '2023-09-19T14:31:46.105Z',
        client: 'Bender (old) Coingaming',
        gameNameAndProvider: 'Pragmatic Play',
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        status: <Tag className="bg-roshi-10 text-lg text-roshi max-w-fit">SUCCESS</Tag>,
      };
    });
  };

  const data = React.useMemo(() => makeData(40), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
      layout="auto"
    />
  );
}

export default Example;