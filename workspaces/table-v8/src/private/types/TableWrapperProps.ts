import React from "react";

type TableWrapperProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  tableRef?: React.ForwardedRef<HTMLDivElement>;
};

export default TableWrapperProps;
