import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400)",
          height: "87vh",
          width: "100vh",
          backgroundPosition: "center",
        }}
      >
        Home
      </div>
    </ThemeProvider>
  );
}
