import React, { useRef } from "react";
import {
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import TableWrapper from "./TableWrapper";
import TBody from "./TBody";
import THead from "./THead";
import TableProps from "../private/types/TableProps";

const Table = ({
  columns,
  data,
  defaultColumn,
  width,
  height,
  maxWidth,
  maxHeight,
  isSticky = true,
  layout = 'fixed',
}: TableProps) => {
  const table = useReactTable({
    columns,
    data,
    defaultColumn,
    state: {
    },
    onExpandedChange: () => {},
    /* getSubRows: row => row.subRows, */
    getCoreRowModel: getCoreRowModel(),
    /* debugTable: true, */
  });

  const tableRef = useRef<HTMLDivElement>(null);

  const renderTableComponent = () => {
    const tableLayout = layout === 'fixed' ? 'fixed' : 'auto';
    return (
      <TableWrapper
        style={{
          width,
          height,
          maxWidth,
          maxHeight,
        }}
        className={isSticky ? 'sticky' : ''}
        tableRef={tableRef}
      >
        <table
          style={{
            tableLayout
          }}
          className={layout === 'auto' ? '' : 'w-full'}
        >
          <THead table={table} />
          <TBody table={table} />
        </table>
      </TableWrapper>
  )};

  return renderTableComponent();
};

export default Table;
