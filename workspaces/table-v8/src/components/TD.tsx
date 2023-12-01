import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { flexRender } from "@tanstack/react-table";
import TDProps from "../private/types/TDProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const TD = forwardRef<HTMLTableCellElement, TDProps>(
(
  {
    cell,
    rowSize,
    backgroundColor,
    isFirstColumn,
    isLastColumn,
  },
  ref
) => (
  <td
    key={cell.id}
    className={mergeClassnames(
      /*'relative */'box-border text-start',
      getFontSize(rowSize),
      getPadding(rowSize),
      backgroundColor,
      isFirstColumn && 'rounded-s-lg',
      isLastColumn && 'rounded-e-lg',
    )}
    ref={ref}
  >
    {flexRender(
      cell.column.columnDef.cell,
      cell.getContext()
    )}
  </td>
));

export default TD;
