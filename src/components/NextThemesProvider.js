"use client";
import { ThemeProvider } from "next-themes";

const NextThemesProvider = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default NextThemesProvider;
