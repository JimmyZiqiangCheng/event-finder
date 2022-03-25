import { useCallback, useState } from "react";

export const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);
  const toggle = useCallback(
    (value) =>
      setState((state) => (typeof value === "boolean" ? value : !state)),
    []
  );
  return [state, toggle];
};
