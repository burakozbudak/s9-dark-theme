// src/hooks/useDarkMode.js
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("geceModu", false);
  return [darkMode, setDarkMode];
};
