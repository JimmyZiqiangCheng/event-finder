import { useCallback, useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { ThemeContext } from "../context/themeContext";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};

export const useDebounce = (func, delay) => {
  let myTimeOut;
  const debounce = useCallback((para = null) => {
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(() => func(para), delay);
  }, []);
  return debounce;
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

export const useTheme = () => {
  return useContext(ThemeContext);
};
