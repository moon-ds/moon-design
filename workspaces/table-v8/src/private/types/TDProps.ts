import { Cell } from "@tanstack/react-table";
import RowSizes from "./RowSizes";

type TDProps = {
  cell: Cell<{}, unknown>;
  selectable?: boolean;
  /* isExpanded?: boolean; */
  /* isLastRow?: boolean; */
  /* hasParent?: boolean; */
  /* isSelected?: boolean; */
  backgroundColor?: string;
  fontColor?: string;
  stickySide?: string;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
  /* isHovered?: boolean; */
  /* headerBackgroundColor?: string; */
  onClick?: () => void;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
  /* role?: string; */
  /* textClip?: ClipProps; */
}

export default TDProps;
