import React, { useRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
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
  defaultRowBackgroundColor = 'bg-goku',
  evenRowBackgroundColor = 'bg-goku',
  rowGap = '1px',
  rowSize = 'md',
  isSticky = true,
  layout = 'fixed',
  getSubRows,
  onExpandedChange,
  onRowSelectionChange,
}: TableProps) => {
  const table = useReactTable({
    columns,
    data,
    defaultColumn,
    state,
    enableRowSelection: true,
    onExpandedChange: onExpandedChange,
    onRowSelectionChange: onRowSelectionChange,
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
        className={mergeClassnames(
          isSticky ? 'sticky' : '')
        }
        tableRef={tableRef}
      >
        <table
          style={{
            tableLayout,
            borderSpacing: `0 ${rowGap}`
          }}
          className={mergeClassnames(
            'border-separate',
            layout === 'auto' ? '' : 'w-full'
          )}
        >
          <THead
            table={table}
            backgroundColor={headerBackgroundColor}
            rowSize={rowSize}
          />
          <TBody
            table={table}
            rowGap={rowGap}
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
