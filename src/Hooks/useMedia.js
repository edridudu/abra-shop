import { useEffect, useState } from "react";

export const useMedia = (breakPoints) => {
  const getCurrentBreakPoint = () => {
    const currentWidth = window.innerWidth;

    for (const breakpoint of breakPoints) {
      if (currentWidth >= breakpoint.min && currentWidth <= breakpoint.max) {
        return breakpoint;
      }
    }
    return undefined;
  };

  const [currentBreakPoint, setCurrentBreakPoint] = useState(() =>
    getCurrentBreakPoint()
  );

  const windowSizeChanged = () => {
    const breakPoint = getCurrentBreakPoint();

    setCurrentBreakPoint(breakPoint);
  };

  useEffect(() => {
    window.addEventListener("resize", windowSizeChanged);

    return () => window.removeEventListener("resize", windowSizeChanged);
  }, []);

  return currentBreakPoint;
};


export default useMedia;