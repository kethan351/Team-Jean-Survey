// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type ThemeValue = "dark";
export const ThemeContext = React.createContext<ThemeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export default ThemeContext;
/* prettier-ignore-end */
