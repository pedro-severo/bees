import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#F2EC54",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#3F3F46",
      light: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Work Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    allVariants: {
      color: "#ffffff",
    },
  },
});

// TODO: Discover why typography config in createTheme function doesn't working in ThemeProvider component
const FontFamilyProvider = styled.div`
  font-family: ${({ theme }) => theme?.typography?.fontFamily};
`;

const ThemeUsage: React.FC<any> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <StyledThemeProvider theme={{ ...customTheme }}>
        <FontFamilyProvider>{children}</FontFamilyProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default ThemeUsage;
