import React from "react";
import { flexRender } from "@tanstack/react-table";
import TBodyProps from "../private/types/TBodyProps";

const TBody = ({
  table
}: TBodyProps) => {
  return (
    <tbody>
      {table.getRowModel().rows.map(row => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => {
              return (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  );
};

export default TBody;
