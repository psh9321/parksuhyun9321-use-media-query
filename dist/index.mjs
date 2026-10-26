// index.ts
import { useEffect, useState } from "react";
var useMediaQuery = (maxWidth, isInclusive) => {
  const [isResize, SetIsResize] = useState(() => {
    if (typeof window === "undefined") return true;
    return isInclusive ? window.innerWidth <= maxWidth : window.innerWidth < maxWidth;
  });
  function ResizeCallback() {
    const value = isInclusive ? window.innerWidth <= maxWidth : window.innerWidth < maxWidth;
    SetIsResize((prev) => prev === value ? prev : value);
  }
  useEffect(() => {
    window.addEventListener("resize", ResizeCallback);
    return () => {
      window.removeEventListener("resize", ResizeCallback);
    };
  }, [maxWidth, isInclusive]);
  return { isResize };
};
var index_default = useMediaQuery;
export {
  index_default as default
};
