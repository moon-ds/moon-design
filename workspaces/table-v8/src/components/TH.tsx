import React, { forwardRef } from "react";
import { mergeClassnames } from '@heathmont/moon-core-tw';
import { flexRender } from "@tanstack/react-table";
import styled from "styled-components";
import StickyColumn from "../private/types/StickyColumn";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

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
    const stickyColumn: StickyColumn = header.column.parent ? header.column.parent?.columnDef : header.column.columnDef;
    const stickySide = stickyColumn.sticky;
    const stickyShift = stickySide
      ? stickySide === 'left'
        ? `left: ${columnData ? columnData?.left : (header.column.columnDef as StickyColumn).left}px;`
        : `right: ${columnData ? columnData?.right : (header.column.columnDef as StickyColumn).right}px;`
      : undefined;

    const HeadCell = styled.th`
      z-index: 1;
      width: ${header.column.columnDef.size}px;
      min-width: ${stickySide ? header.column.columnDef.size : header.column.columnDef.minSize}px;
      max-width: ${stickySide ? header.column.columnDef.size : header.column.columnDef.maxSize}px;
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
