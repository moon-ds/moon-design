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

  /* TODO: I don`t get why an expression at line 66 doesn`t work */
  const stickyBefore = `
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: -1px;
      height: 100%;
      z-index: -1;
      background-color: rgb(var(--${backgroundColor?.replace(/^.+-(\w+)$/g, "$1")}));
      ${isFirstColumn && 'border-top-left-radius: 8px;'}
      ${isFirstColumn && 'border-bottom-left-radius: 8px;'}
      ${isLastColumn && 'border-top-right-radius: 8px;'}
      ${isLastColumn && 'border-bottom-right-radius: 8px;'}
    };
  `;

  const BodyCell = styled.td`
    width: ${cell.column.columnDef.size}px;
    min-width: ${stickySide ? cell.column.columnDef.size : cell.column.columnDef.minSize}px;
    max-width: ${stickySide ? cell.column.columnDef.size : cell.column.columnDef.maxSize}px;
    ${stickyShift && stickyShift}
    ${stickySide && stickyBefore}
  `;

  return (
    <BodyCell
      key={cell.id}
      className={mergeClassnames(
        'box-border text-start',
        getFontSize(rowSize),
        getPadding(rowSize),
        isRowSelected ? 'bg-heles' : backgroundColor,
        isFirstColumn && 'rounded-s-lg',
        isLastColumn && 'rounded-e-lg',
        stickySide && 'sticky',
      )}
      ref={ref}
    >
      {textClip ? (
          <div
            className={mergeClassnames(
              (textClip === ('clip' as ClipProps)) && 'break-all truncate',
              (textClip === ('break' as ClipProps)) && 'break-all text-clip',
            )}
          >
            {flexRender(
              cell.column.columnDef.cell,
              cell.getContext()
            )}
          </div>
        ) : flexRender(
          cell.column.columnDef.cell,
          cell.getContext()
        )
      }
    </BodyCell>
)});

export default TD;
