import React, { MutableRefObject, forwardRef, useEffect, useRef } from "react";
import { mergeClassnames } from '@heathmont/moon-core-tw';
import { ColumnDef, flexRender } from "@tanstack/react-table";
import styled from "styled-components";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

type StickyColumn = ColumnDef<{}> & {
  sticky?: string | undefined;
}

const TH = forwardRef<HTMLTableCellElement, THProps>(
  (
    {
      backgroundColor,
      header,
      isLastColumn,
      rowSize,
      isCellBorder,
      columnData,
      onClick
    },
    ref
  ) => {
    const stickySide = header.column.parent ? (header.column.parent?.columnDef as StickyColumn)?.sticky : (header.column.columnDef as StickyColumn)?.sticky;
    const stickyShift = stickySide
      ? stickySide === 'left'
        ? `left: ${columnData ? columnData?.left : 0}px;`
        : `right: ${columnData ? columnData?.right : 0}px;`
      : undefined;

    const HeadCell = styled.th`
      z-index: 1;
      ${stickyShift && stickyShift}
    `;

    return (
      <HeadCell
        key={header.id}
        colSpan={header.colSpan}
        className={mergeClassnames(
          backgroundColor && backgroundColor,
          stickySide && 'sticky',
        )}
        ref={ref}
      >
        {header.isPlaceholder ? null : (
          <div
            className={mergeClassnames(
              'relative text-start font-meduim',
              getFontSize(rowSize),
              getPadding(rowSize)
            )}
          >
            {flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
            {header.column.getCanFilter() ? (
              <>{/* It`s possible to place a filter here */}</>
            ) : null}
          </div>
        )}
      </HeadCell>
  )}
);

export default TH;
