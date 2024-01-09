import React from "react";
import TF from "./TF";
import TFootProps from "../private/types/TFootProps";

const TFoot = ({
  table,
  backgroundColor,
  rowSize,
  rowGap,
}: TFootProps) => {
  return (
    <tfoot>
      {table.getFooterGroups().map(footerGroup => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header, index) => (
            <TF
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
            />
          ))}
        </tr>
      ))}
    </tfoot>
  );
};

export default TFoot;
