import { useState } from "react";
import { THEME } from "../constants";

/**
 * モードのカスタムフック
 * @returns 状態と関数
 */
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = isDarkMode ? THEME.dark : THEME.light;

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return {
    isDarkMode,
    theme,
    toggleTheme,
  };
};
