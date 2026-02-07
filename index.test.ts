import { renderHook, act } from "@testing-library/react";

import { describe, it, expect } from "vitest";

import useMediaQuery from "./index";

describe("useMediaQuery", () => {
  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });

    window.dispatchEvent(new Event("resize"));
  };

  it("뷰포트가 maxWidth 보다 작으면 isResize는 true", () => {
    setWindowWidth(500);

    const { result } = renderHook(() => useMediaQuery(768));

    expect(result.current.isResize).toBe(true);
  });

  it("뷰포트가 maxWidth 보다 크면 isResize는 false", () => {
    setWindowWidth(1024);

    const { result } = renderHook(() => useMediaQuery(768));

    expect(result.current.isResize).toBe(false);
  });

  it("resize 시 값이 변경된다", () => {
    setWindowWidth(1024);

    const { result } = renderHook(() => useMediaQuery(768));

    expect(result.current.isResize).toBe(false);

    act(() => {
      setWindowWidth(500);
    });

    expect(result.current.isResize).toBe(true);
  });
});
