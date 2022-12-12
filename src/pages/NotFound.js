import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

const theme = createTheme();

export default function NotFound() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ height: "89vh" }}>
        <CssBaseline />
        <Typography color="black" align="center" variant="h2" marked="center">
          Page Not Found!
          <br />
          Please type a valid URL, or click on a page on the Navigation bar!
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
