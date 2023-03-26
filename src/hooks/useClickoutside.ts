import React, { useEffect } from "react";

export const useClickoutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  excludeRef?: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      // 判断用户点击的对象是否在DOM节点内部
      if (ref.current?.contains(e.target as Node)) {
        return;
      }
      if (excludeRef?.current && excludeRef.current.contains(e.target as Node)) {
        return;
      }
      callback();
      console.log("点击DOM外面区域");
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);
};
