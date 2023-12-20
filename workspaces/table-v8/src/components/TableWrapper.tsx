import React, { forwardRef, MutableRefObject, useEffect, WheelEvent } from "react"
import { mergeClassnames } from "@heathmont/moon-core-tw";
import TableWrapperProps from "../private/types/TableWrapperProps";

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  (
    { style, className, children, tableRef }
  ) => {
    const handleWheel = (e: globalThis.WheelEvent) => {
      const evt = e as unknown as WheelEvent<HTMLDivElement>;
      if ((evt.target as HTMLElement).closest('thead') !== null)
        return;
      evt.preventDefault();
      evt.currentTarget.scrollBy(0, evt.deltaY);
    }

    useEffect(() => {
      const element = (tableRef as MutableRefObject<HTMLDivElement>)?.current;
      element?.addEventListener("wheel", handleWheel, { passive: false });
    }, []);

    return (
      <div
        ref={tableRef}
        style={style ?? {}}
        className={mergeClassnames(
          className
        )}
      >
        {children}
      </div>
    )
  }
);

export default TableWrapper;
