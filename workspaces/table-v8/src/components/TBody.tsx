import React from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import TD from "./TD";
import TBodyProps from "../private/types/TBodyProps";

const TBody = ({
  table,
  rowGap = '0',
  rowSize,
  backgroundColor,
  defaultRowBackgroundColor,
  evenRowBackgroundColor
}: TBodyProps) => {
  const oddRowBGColor = defaultRowBackgroundColor && defaultRowBackgroundColor;
  const evenBGColor = evenRowBackgroundColor ? evenRowBackgroundColor : oddRowBGColor;

  return (
    <tbody
      className={mergeClassnames(backgroundColor)}
    >
      {table.getRowModel().rows.map((row, rowIndex) => {
        const cells = row.getVisibleCells();
        return (
          <tr
            key={row.id}
            style={{
              borderWidth: rowGap,
            }}
            className={mergeClassnames(
              (rowIndex === 0) && 'border-t-transparent',
              'border-r-transparent border-b-transparent border-l-transparent',
            )}
          >
            {cells.map((cell, cellIndex) => (
              <TD
                cell={cell}
                rowSize={rowSize}
                backgroundColor={(rowIndex % 2 === 0) ? evenBGColor : oddRowBGColor}
                isFirstColumn={cellIndex === 0}
                isLastColumn={cellIndex === cells.length - 1}
              />
            ))}
          </tr>
        )
      })}
    </tbody>
  );
};

export default TBody;
