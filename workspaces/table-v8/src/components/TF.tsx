import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { Header, flexRender } from "@tanstack/react-table";
import styled from "styled-components";
import StickyColumn from "../private/types/StickyColumn";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const getStickyShift = (header: Header<{}, unknown>, stickySide: string,) => {
  let shift = 0;
  if (stickySide === 'left') {
    for (let i = 0; i < +header.index; i++) {
      shift += +(header.headerGroup.headers[i].column.columnDef.size || 0);
    }
    return shift;
  }

  if (stickySide === 'right') {
    for (let i = header.headerGroup.headers.length - 1; i > +header.index; i--) {
      shift += +(header.headerGroup.headers[i].column.columnDef.size || 0);
    }
    return shift;
  }
}

const TF = forwardRef<HTMLTableCellElement, THProps>(
  ({
    backgroundColor,
    header,
    rowSize,
    rowGap,
    isLastColumn,
    columnData,
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

  const stickyShift = stickySide
  ? stickySide === 'left'
    ? `left: ${columnData ? columnData?.left : getStickyShift(header, 'left')}px;`
    : `right: ${columnData ? columnData?.right : getStickyShift(header, 'right')}px;`
  : undefined;

  const stickyBefore = `
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: calc(100% + 1px);
        height: 100%;
        background-color: rgb(var(--${backgroundColor?.replace(/^.+-(\w+)$/g, "$1")}));
      };
    `;

  const FootCell = styled.th`
    z-index: 1;
    width: ${header.column.columnDef.size}px;
    min-width: ${stickySide ? columnDefinition.size : columnDefinition.minSize}px;
    max-width: ${stickySide ? columnDefinition.size : columnDefinition.maxSize}px;
    ${stickyShift && stickyShift}
    ${stickySide && stickyBefore}
  `;

  return (
    <FootCell
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
    </FootCell>
  );
});

export default TF;