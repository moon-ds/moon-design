import React, { useRef } from "react";
import {
  RowData,
  getCoreRowModel,
  getExpandedRowModel,
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
  state,
  headerBackgroundColor = 'bg-gohan',
  defaultRowBackgroundColor = 'bg-gohan',
  evenRowBackgroundColor = 'bg-gohan',
  rowSize = 'md',
  isSticky = true,
  layout = 'fixed',
  getSubRows,
  onExpandedChange,
}: TableProps) => {
  const table = useReactTable({
    columns,
    data,
    defaultColumn,
    state,
    onExpandedChange: onExpandedChange,
    getSubRows: getSubRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
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
          <THead
            table={table}
            headerBackgroundColor={headerBackgroundColor}
            rowSize={rowSize}
          />
          <TBody
            table={table}
            rowSize={rowSize}
            defaultRowBackgroundColor={defaultRowBackgroundColor}
            evenRowBackgroundColor={evenRowBackgroundColor}
          />
        </table>
      </TableWrapper>
  )};

  return renderTableComponent();
};

export default Table;
