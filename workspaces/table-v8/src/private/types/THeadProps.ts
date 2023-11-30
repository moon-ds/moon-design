import { Table } from "@tanstack/react-table";
import RowSizes from "./RowSizes";

type THeadProps = {
  table: Table<{}>;
  headerBackgroundColor?: string;
  rowSize: RowSizes;
};

export default THeadProps;
