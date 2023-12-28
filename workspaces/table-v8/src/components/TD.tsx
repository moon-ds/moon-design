import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import TDProps from "../private/types/TDProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

type StickyColumn = ColumnDef<{}> & {
  sticky?: string | undefined;
}

const TD = forwardRef<HTMLTableCellElement, TDProps>(
(
  {
    cell,
    rowSize,
    backgroundColor,
    isFirstColumn,
    isLastColumn,
    isRowSelected = false,
  },
  ref
) => {
  const stickySide = cell.column.parent ? (cell.column.parent?.columnDef as StickyColumn)?.sticky : (cell.column.columnDef as StickyColumn)?.sticky;

  return (
    <td
      key={cell.id}
      style={{
        right: 0, /* Temporarily rule */
      }}
      className={mergeClassnames(
        /*'relative */'box-border text-start',
        getFontSize(rowSize),
        getPadding(rowSize),
        isRowSelected ? 'bg-heles' : backgroundColor,
        isFirstColumn && 'rounded-s-lg',
        isLastColumn && 'rounded-e-lg',
        stickySide && 'sticky',
      )}
      ref={ref}
    >
      {flexRender(
        cell.column.columnDef.cell,
        cell.getContext()
      )}
    </td>
)});

export default TD;
