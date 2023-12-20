import React, { forwardRef, KeyboardEventHandler, MutableRefObject, useCallback, useEffect, useState, WheelEvent } from "react"
import { mergeClassnames } from "@heathmont/moon-core-tw";
import TableWrapperProps from "../private/types/TableWrapperProps";

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  (
    { style, className, children, tableRef }
  ) => {
    const kbDelta = 132;
    const [isFocused, setIsFocused] = useState(false);

    const handleWheel = (e: globalThis.WheelEvent) => {
      const evt = e as unknown as WheelEvent<HTMLDivElement>;
      if ((evt.target as HTMLElement).closest('thead') !== null)
        return;
      evt.preventDefault();
      evt.currentTarget.scrollBy(0, evt.deltaY);
    }

    const handleKbDown = useCallback((evt: React.KeyboardEvent<HTMLDivElement>) => {
      if (isFocused) {
        const kbDeltas = { x: 0, y: 0 };
        if (evt.code === "ArrowUp" || evt.code === "ArrowDown" || evt.code === "ArrowLeft" || evt.code === "ArrowRight") {
          evt.preventDefault();
          switch (evt.code) {
            case "ArrowUp": kbDeltas.y = -kbDelta; break;
            case "ArrowDown": kbDeltas.y = kbDelta; break;
            case "ArrowLeft": kbDeltas.x = -kbDelta; break;
            case "ArrowRight": kbDeltas.x = kbDelta; break;
          }
          evt.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
        }
      }
    }, [isFocused]);

    useEffect(() => {
      const element = (tableRef as MutableRefObject<HTMLDivElement>)?.current;
      element?.addEventListener("wheel", handleWheel, { passive: false });
    }, []);

    return (
      <div
        ref={tableRef}
        tabIndex={0}
        style={style ?? {}}
        className={mergeClassnames(
          "focus:outline-none",
          className,
        )}
        onFocus={() => { setIsFocused(true) }}
        onBlur={() => { setIsFocused(false) }}
        onKeyDown={(e) => { handleKbDown(e) }}
      >
        {children}
      </div>
    )
  }
);

export default TableWrapper;
