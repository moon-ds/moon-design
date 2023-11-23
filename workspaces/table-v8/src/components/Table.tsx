import React from "react";
import {
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
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
    <></>
  )
};

export default Table;
