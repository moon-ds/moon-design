import React from "react";
import { flexRender } from "@tanstack/react-table";
import THeadProps from "../private/types/THeadProps";

const THead = ({
  table,
}: THeadProps) => {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div>
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
          })}
        </tr>
      ))}
    </thead>
  )
}

export default THead;
