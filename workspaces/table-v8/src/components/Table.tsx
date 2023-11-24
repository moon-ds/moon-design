import React from "react";
import {
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import TBody from "./TBody";
import THead from "./THead";
import TableProps from "../private/types/TableProps";

const Table = ({
  columns,
  data,
}: TableProps) => {
  const table = useReactTable({
    columns,
    data,
    state: {
    },
    onExpandedChange: () => {},
    /* getSubRows: row => row.subRows, */
    getCoreRowModel: getCoreRowModel(),
    /* debugTable: true, */
  });

  return (
    <table>
      <THead table={table} />
      <TBody table={table} />
    </table>
  )
};

export default Table;
