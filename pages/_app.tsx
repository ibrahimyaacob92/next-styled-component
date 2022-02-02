import type { AppProps } from "next/app";
import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";

type ThemeOption = "light" | "dark";
export const themes: Record<ThemeOption, DefaultTheme> = {
  light: {
    borderRadius: "10px",
    colors: {
      primary: "#ff4742",
      secondary: "black",
    },
  },
  dark: {
    borderRadius: "10px",
    colors: {
      primary: "#92fef9",
      secondary: "white",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [themeState, setThemeState] = useState<ThemeOption>("light");

  return (
    <ThemeProvider theme={themes[themeState]}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
