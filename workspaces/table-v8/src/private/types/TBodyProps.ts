import { Table } from "@tanstack/react-table";
import RowSizes from "./RowSizes";

type TBodyProps = {
  table: Table<{}>;
  rowSize: RowSizes;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
};

export default TBodyProps;
