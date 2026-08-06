import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "blue",

  radius: {
    xs: "6px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
  },

  defaultRadius: "md",

  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",

  headings: {
    fontWeight: "700",
  },

  shadows: {
    xs: "0 1px 2px rgba(0,0,0,.08)",
    sm: "0 4px 12px rgba(0,0,0,.08)",
    md: "0 8px 24px rgba(0,0,0,.12)",
  },
});
