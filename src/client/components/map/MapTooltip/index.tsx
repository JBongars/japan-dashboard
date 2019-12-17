import React, { useState, createRef } from "react";
import styles from "./styles.scss";

interface TooltipProps {
  children: any;
  isVisible: boolean;
  contents: string;
}

export default function MapTooltip(
  props: TooltipProps
): React.ComponentElement<TooltipProps, null> {
  const ref = createRef<HTMLDivElement>();
  const { children, isVisible, contents } = props;
  const visibleTag = isVisible ? styles.visible : "";

  const [positionX, setPositionX] = useState(0);
  const [positionY, setpositionY] = useState(0);

  const handleMouseMove = (e: any): void => {
    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = ref.current;

    setPositionX(pageX - offsetLeft + 5);
    setpositionY(pageY - offsetTop + 5);
  };

  const tooltipStyle = {
    top: `${positionY}px`,
    left: `${positionX}px`
  };

  return (
    <div ref={ref} className={styles.tooltipArea} onMouseMove={handleMouseMove}>
      <div
        className={[styles.tooltip, visibleTag].join(" ")}
        style={tooltipStyle}
      >
        {contents}
      </div>
      {children}
    </div>
  );
}
