import React, { useRef, useEffect, RefObject, useState } from "react";

export function useOutsideNavigationClick(ref: RefObject<HTMLElement>, setIsOpen: (arg: boolean) => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
