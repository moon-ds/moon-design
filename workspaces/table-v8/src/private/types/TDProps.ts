import { Cell } from "@tanstack/react-table";
import ClipProps from "./ClipProps";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";

type TDProps = {
  cell: Cell<{}, unknown>;
  index: number;
  cells: Cell<{}, unknown>[];
  selectable?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  stickySide?: string;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
  bodyBackgroundColor?: string;
  onClick?: () => void;
  rowSize?: RowSizes;
  isRowSelected?: boolean;
  isCellBorder?: boolean;
  columnData?: ColumnData;
  textClip?: ClipProps;
};

export default TDProps;
