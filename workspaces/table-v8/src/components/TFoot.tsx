import React from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import styled from "styled-components";
import TF from "./TF";
import TFootProps from "../private/types/TFootProps";

const TFoot = ({
  table,
  backgroundColor,
  rowSize,
  rowGap,
  isSticky,
  columnMap
}: TFootProps) => {
  const bottom = isSticky && rowGap ? rowGap : undefined;
  const Foot = styled.tfoot`
    bottom: ${bottom};
    &::before {
      position: absolute;
      content: "";
      bottom: -${bottom};
      width: 100%;
      height: 100%;
      background-color: rgb(var(--${backgroundColor?.replace(/^.+-(\w+)$/g, "$1")}));
    }
  `;

  const cmLength = columnMap?.length || 0;

  return (
    isSticky ? (
      <Foot
        className={mergeClassnames(
          isSticky && "sticky z-1",
        )}
      >
        {table.getFooterGroups().map((footerGroup, indexFG) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header, index) =>
              <TF
                header={header}
                backgroundColor={backgroundColor}
                rowSize={rowSize}
                columnData={columnMap && columnMap[cmLength - indexFG - 1][index]}
              />
            )}
          </tr>
        ))}
      </Foot>
    ) : (
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
  ));
};

export default TFoot;
