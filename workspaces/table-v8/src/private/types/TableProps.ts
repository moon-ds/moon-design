import {
  ColumnDef,
  TableState
} from "@tanstack/react-table";

type TableProps<D extends object = {}> = {
  columns: ColumnDef<D, any>[];
  data: D[];
  state?: Partial<TableState> | undefined;
};

export default TableProps;
