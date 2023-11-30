import React from "react";
import TD from "./TD";
import TBodyProps from "../private/types/TBodyProps";

const TBody = ({
  table,
  rowSize,
  defaultRowBackgroundColor,
  evenRowBackgroundColor
}: TBodyProps) => {
  const oddRowBGColor = defaultRowBackgroundColor && defaultRowBackgroundColor;
  const evenBGColor = evenRowBackgroundColor ? evenRowBackgroundColor : oddRowBGColor;

  return (
    <tbody>
      {table.getRowModel().rows.map((row, rowIndex) => {
        const cells = row.getVisibleCells();
        return (
          <tr
            key={row.id}
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
