import { Table } from "@tanstack/react-table";
import RowSizes from "./RowSizes";

type THeadProps = {
  table: Table<{}>;
  backgroundColor?: string;
  rowGap?: string | undefined;
  rowSize?: RowSizes;
  isSticky?: boolean;
};

export default THeadProps;
