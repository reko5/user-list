import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400)",
          height: "89vh",
          //width: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: -1,
        }}
      >
        Itt lesz a felirat
      </Box>
    </ThemeProvider>
  );
}
