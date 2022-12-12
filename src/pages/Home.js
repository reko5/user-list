import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        <Box>
          <Typography color="white" align="center" variant="h1" marked="center">
            Welcome at your User List
          </Typography>
          <Typography
            color="black"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            Feel free to watch, add and edit your users at our brand new site.
            <br />
            Every person can be found under the USER LIST page. If there aren't
            enough people around you, just add them easily at ADD USER page.
            <br />
            If you wrote something wrong, don't worry! Just click on the EDIT
            USER button at User List, and change the names.
            <br />
            Last but not least, LOCK or ACTIVATE users with one click at User
            List too.
            <br />
          </Typography>
          <Typography variant="body2" color="black" sx={{ mt: 2 }}>
            Discover the experience
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
