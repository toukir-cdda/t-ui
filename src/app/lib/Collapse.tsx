import React, { useState, useEffect, useRef } from "react";

const Collapse = ({ isOpened = false, children }: any) => {
  const [containerHeight, setContainerHeight] = useState<number | undefined>(
    undefined
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpened) {
      setContainerHeight(contentRef.current?.clientHeight);
    } else {
      setContainerHeight(0);
    }
  }, [isOpened]);

  return (
    <div
      style={{
        height: containerHeight,
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default Collapse;
