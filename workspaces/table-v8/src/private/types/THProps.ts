import { Header } from "@tanstack/react-table";
import RowSizes from "./RowSizes";

type THProps = {
  headerBackgroundColor?: string;
  stickySide?: string;
  header: Header<{}, unknown>;
  isLastColumn?: boolean;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
  onClick?: (e: any) => void;
};

export default THProps;
