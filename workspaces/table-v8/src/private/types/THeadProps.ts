import { Table } from "@tanstack/react-table";
import RowSizes from "./RowSizes";

type THeadProps = {
  table: Table<{}>;
  backgroundColor?: string;
  rowSize: RowSizes;
};

export default THeadProps;
