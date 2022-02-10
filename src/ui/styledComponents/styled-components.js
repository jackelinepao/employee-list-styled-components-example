import { useContext } from "react";
import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  ThemeContext,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents;

const useTheme = () => useContext(ThemeContext);

export { css, useTheme, createGlobalStyle, ThemeProvider };
export default styled;
