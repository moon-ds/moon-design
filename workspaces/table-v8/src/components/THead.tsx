import React from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import styled from "styled-components";
import TH from "./TH";
import THeadProps from "../private/types/THeadProps";

const THead = ({
  table,
  backgroundColor,
  rowGap,
  rowSize,
  isSticky,
  columnMap,
}: THeadProps) => {
  const top = isSticky && rowGap ? rowGap : undefined;
  const Head = styled.thead`
    top: ${top};
    &::before {
      position: absolute;
      content: "";
      top: -${top};
      width: 100%;
      height: 100%;
      background-color: rgb(var(--${backgroundColor?.replace(/^.+-(\w+)$/g, "$1")}));
    }
  `;

  return (
    isSticky ? (
      <Head
        className={mergeClassnames(
          isSticky && "sticky z-1",
        )}
      >
        {table.getHeaderGroups().map((headerGroup, indexHG) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header, index) =>
              <TH
                header={header}
                backgroundColor={backgroundColor}
                rowSize={rowSize}
                rowGap={rowGap}
                isLastColumn={index === headerGroup.headers.length - 1}
                columnData={columnMap && columnMap[indexHG][index]}
              />
            )}
          </tr>
        ))}
      </Head>
    ) : (
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
  )
}

export default THead;
