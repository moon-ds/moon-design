import {
  ColumnDef,
  TableState,
} from "@tanstack/react-table";
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
  isSticky?: boolean;
  layout?: TableLayouts;
};

export default TableProps;
