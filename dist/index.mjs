// index.ts
import { useEffect, useState } from "react";
var useMediaQuery = (maxWidth) => {
  const [isResize, SetIsResize] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth < maxWidth;
  });
  function ResizeCallback() {
    const value = window.innerWidth < maxWidth;
    SetIsResize((prev) => prev === value ? prev : value);
  }
  useEffect(() => {
    window.addEventListener("resize", ResizeCallback);
    return () => {
      window.removeEventListener("resize", ResizeCallback);
    };
  }, [maxWidth]);
  return { isResize };
};
export {
  useMediaQuery
};
