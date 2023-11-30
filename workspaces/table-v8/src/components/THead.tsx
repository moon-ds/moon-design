import React from "react";
import TH from "./TH";
import THeadProps from "../private/types/THeadProps";

const THead = ({
  table,
  headerBackgroundColor,
  rowSize,
}: THeadProps) => {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header =>
            <TH
              header={header}
              headerBackgroundColor={headerBackgroundColor}
              rowSize={rowSize}
            />
          )}
        </tr>
      ))}
    </thead>
  )
}

export default THead;
