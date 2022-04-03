import { useCallback, useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);
  const toggle = useCallback(
    (value) =>
      setState((state) => (typeof value === "boolean" ? value : !state)),
    []
  );
  return [state, toggle];
};

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useWillMount = (fu) => {
  const willMount = useRef(true);
  willMount.current && fu();
  willMount.current = false;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
