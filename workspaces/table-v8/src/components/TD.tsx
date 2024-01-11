import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { flexRender, Cell } from "@tanstack/react-table";
import styled from "styled-components";
import ClipProps from "../private/types/ClipProps";
import StickyColumn from "../private/types/StickyColumn";
import TDProps from "../private/types/TDProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const getStickyShift = (cells: Cell<{}, unknown>[], index: number, stickySide?: string,) => {
  let shift = 0;
  if (stickySide === 'left') {
    for (let i = 0; i < index; i++) {
      shift += +(cells[i].column.columnDef.size || 0);
    }
    return shift;
  }

  if (stickySide === 'right') {
    for (let i = cells.length - 1; i > +index; i--) {
      shift += +(cells[i].column.columnDef.size || 0);
    }
    return shift;
  }
}

const TD = forwardRef<HTMLTableCellElement, TDProps>(
(
  {
    cell,
    index,
    cells,
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
  const stickyColumn: StickyColumn = cell.column.parent ? cell.column.parent?.columnDef : cell.column.columnDef;
  const stickySide = stickyColumn.sticky;

  const stickyShift = stickySide
      ? stickySide === 'left'
        ? `left: ${columnData ? columnData?.left : getStickyShift(cells, index, 'left')}px;`
        : `right: ${columnData ? columnData?.right : getStickyShift(cells, index, 'right')}px;`
      : undefined;

  const BodyCell = styled.td`
    width: ${cell.column.columnDef.size}px;
    min-width: ${stickySide ? cell.column.columnDef.size : cell.column.columnDef.minSize}px;
    max-width: ${stickySide ? cell.column.columnDef.size : cell.column.columnDef.maxSize}px;
    ${stickyShift && stickyShift}
  `;

  return (
    <BodyCell
      key={cell.id}
      className={mergeClassnames(
        'box-border text-start',
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
