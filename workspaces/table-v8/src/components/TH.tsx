import React, { MutableRefObject, forwardRef, useEffect, useRef } from "react";
import { mergeClassnames } from '@heathmont/moon-core-tw';
import { ColumnDef, flexRender } from "@tanstack/react-table";
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

    return (
      <th
        key={header.id}
        colSpan={header.colSpan}
        style={{
          right: `${columnData && columnData.right}px`, /* Temporarily rule */
        }}
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
      </th>
  )}
);

export default TH;
