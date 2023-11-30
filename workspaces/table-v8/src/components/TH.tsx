import React, { forwardRef } from "react";
import { mergeClassnames } from '@heathmont/moon-core-tw';
import { flexRender } from "@tanstack/react-table";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utilities/getFontSize";
import getPadding from "../private/utilities/getPadding";

const TH = forwardRef<HTMLTableCellElement, THProps>(
  (
    {
      headerBackgroundColor,
      header,
      stickySide,
      isLastColumn,
      rowSize,
      isCellBorder,
      onClick
    },
    ref
  ) => (
    <th
      key={header.id}
      colSpan={header.colSpan}
      className={headerBackgroundColor && headerBackgroundColor}
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
  )
);

export default TH;
