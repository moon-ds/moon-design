import React, { forwardRef } from "react"
import { mergeClassnames } from '@heathmont/moon-core-tw';
import TableWrapperProps from "../private/types/TableWrapperProps";

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  (
    { style, className, children, tableRef }
  ) => (
    <div
      ref={tableRef}
      style={style ?? {}}
      className={mergeClassnames(
        '',
        className
      )}
    >
      {children}
    </div>
  )
);

export default TableWrapper;
