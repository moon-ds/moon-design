import { Table } from "@tanstack/react-table";
import RowSizes from "./RowSizes";

type TBodyProps = {
  table: Table<{}>;
  rowGap?: string;
  rowSize: RowSizes;
  isSelectable?: boolean;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
};

export default TBodyProps;
