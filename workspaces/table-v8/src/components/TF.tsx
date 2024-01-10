import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { flexRender } from "@tanstack/react-table";
import StickyColumn from "../private/types/StickyColumn";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const TF = forwardRef<HTMLTableCellElement, THProps>(
  ({
    backgroundColor,
    header,
    rowSize,
  },
  ref
) => {
  const columnDefinition = header.column.columnDef;
  const footerValue = columnDefinition.footer
    ? (typeof columnDefinition.footer === 'function'
      ? columnDefinition.footer(header.getContext())
      : columnDefinition.footer)
    : undefined;

  const stickyColumn: StickyColumn = header.column.parent ? header.column.parent?.columnDef : columnDefinition;
  const stickySide = stickyColumn.sticky;

  return (
    <td
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
            style={{
              fontWeight: 'bold',
            }}
            className={mergeClassnames(
              'relative text-start',
              getFontSize(rowSize),
              footerValue && getPadding(rowSize)
            )}
          >
            {flexRender(
              header.column.columnDef.footer,
              header.getContext()
            )}
          </div>
        )}
    </td>
  );
});

export default TF;
