import {
  ColumnDef,
  ExpandedState,
  OnChangeFn,
  TableState,
} from "@tanstack/react-table";
import RowSizes from "./RowSizes";
import TableLayouts from "./TableLayouts";

type TableProps<D extends object = {}> = {
  columns: ColumnDef<D, any>[];
  data: D[];
  defaultColumn?: Partial<ColumnDef<{}, unknown>> | undefined;
  state?: Partial<TableState> | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
  maxWidth?: string | number | undefined;
  maxHeight?: string | number | undefined;
  headerBackgroundColor?: string;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  rowSize?: RowSizes;
  isSticky?: boolean;
  layout?: TableLayouts;
  getSubRows?: ((originalRow: any, index: number) => any[] | undefined) | undefined;
  onExpandedChange?: OnChangeFn<ExpandedState> | undefined;
};

export default TableProps;
