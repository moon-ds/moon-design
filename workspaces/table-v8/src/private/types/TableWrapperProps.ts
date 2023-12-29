import React from "react";

type TableWrapperProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  tableWrapperRef?: React.ForwardedRef<HTMLDivElement>;
};

export default TableWrapperProps;
