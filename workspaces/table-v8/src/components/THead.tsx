import React from "react";
import TH from "./TH";
import THeadProps from "../private/types/THeadProps";

const THead = ({
  table,
  backgroundColor,
  rowSize,
}: THeadProps) => {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header =>
            <TH
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
            />
          )}
        </tr>
      ))}
    </thead>
  )
}

export default THead;
