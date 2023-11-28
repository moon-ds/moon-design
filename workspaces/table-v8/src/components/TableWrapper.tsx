import React, { forwardRef } from "react"
import TableWrapperProps from "../private/types/TableWrapperProps";

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  (
    { style, className, children, tableRef }
  ) => (
    <div
      ref={tableRef}
      style={style ?? {}}
      className={className}
    >
      {children}
    </div>
  )
);

export default TableWrapper;
