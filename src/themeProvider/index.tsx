"use client";
import type { FC, HTMLAttributes } from "react";
import { useEffect, useMemo } from "react";
import type { Theme } from "./ThemeTypes";
import { ThemeContext, useThemeMode } from "./ThemeContext";
import { DeepPartial } from "../helpers/deep-partial";
import { mergeDeep } from "../helpers/mergeDeep";
import { theme as defaultTheme } from "../theme/theme";
import { windowExists } from "../helpers/window-exists";

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<Theme>;
  usePreferences?: boolean;
}

interface ComponentBookProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const ComponentBook: FC<ComponentBookProps> = ({
  children,
  theme = {},
}) => {
  const { theme: customTheme = {}, dark, usePreferences = true } = theme;
  const [mode, setMode, toggleMode] = useThemeMode(usePreferences);

  const mergedTheme = mergeDeep(defaultTheme, customTheme) as unknown as Theme;

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode("dark");
      }

      if (windowExists()) {
        document.documentElement.classList.add("dark");
      }
    }
  }, [dark, setMode]);

  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export type { Theme } from "./ThemeTypes";
