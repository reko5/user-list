import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Groups2Icon from "@mui/icons-material/Groups2";

const pages = ["Add User", "Edit User", "Disable User"];

function Header() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Groups2Icon sx={{ mr: 3 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UserList
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

/*
import React from "react";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <Container>
      <div> Header </div>
    </Container>
  );
}
*/
