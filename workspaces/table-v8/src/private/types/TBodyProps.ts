import { Table } from "@tanstack/react-table";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";

type TBodyProps = {
  table: Table<{}>;
  rowGap?: string;
  rowSize: RowSizes;
  isSelectable?: boolean;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  columnMap?: ColumnData[][];
};

export default TBodyProps;
