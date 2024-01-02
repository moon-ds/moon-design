import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import styled from "styled-components";
import ClipProps from "../private/types/ClipProps";
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
    columnData,
    textClip,
  },
  ref
) => {
  const stickySide = cell.column.parent ? (cell.column.parent?.columnDef as StickyColumn)?.sticky : (cell.column.columnDef as StickyColumn)?.sticky;
  const stickyShift = stickySide
      ? stickySide === 'left'
        ? `left: ${columnData ? columnData?.left : 0}px`
        : `right: ${columnData ? columnData?.right : 0}px`
      : undefined;

  /* TODO: the Max-Width rule is a hardcore entry. It`s a temporarily line */
  const BodyCell = styled.td`
    max-width: 150px;
    ${stickyShift && stickyShift}
  `;

  return (
    <BodyCell
      key={cell.id}
      className={mergeClassnames(
        /*'relative */'box-border text-start',
        (textClip === ('clip' as ClipProps)) && 'break-all truncate',
        (textClip === ('break' as ClipProps)) && 'break-all text-clip',
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
    </BodyCell>
)});

export default TD;
