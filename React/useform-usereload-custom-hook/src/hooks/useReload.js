import { useCallback } from "react";

export function useReload() {
  const reload = useCallback(function reload() {
    window.history.go(-2);
  }, []);
  return reload;
}
