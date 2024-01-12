import React from "react";

type ContainerData = {
  width?: string | number;
  height?: string | number;
};

type TableWrapperProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  container?: ContainerData;
  tableWrapperRef?: React.ForwardedRef<HTMLDivElement>;
};

export default TableWrapperProps;
