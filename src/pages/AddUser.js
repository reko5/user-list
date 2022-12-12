import React, { useState } from "react";
import { addUser } from "../services/UsersService";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function AddUser() {
  const [firstName, setFirstName] = useState({ value: "" });
  const [lastName, setLastName] = useState({ value: "" });
  const [messageOk, setMessageOk] = useState();
  const [messageFirstName, setMesssageFirstName] = useState();
  const [messageLastName, setMesssageLastName] = useState();

  const firstNameHandler = (e) => {
    setFirstName((currentValue) => ({
      ...currentValue,
      value: e.target.value,
    }));
  };

  const lastNameHandler = (e) => {
    setLastName((currentValue) => ({
      ...currentValue,
      value: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({
      first_name: firstName.value,
      last_name: lastName.value,
      status: "active",
    })
      .then((response) => {
        setMessageOk(
          `User added to the list as "${
            firstName.value + " " + lastName.value
          }"!`
        );
        setMesssageFirstName("");
        setMesssageLastName("");
      })
      .catch((error) => {
        const validationError = JSON.stringify(error.response.data);
        setMessageOk("");
        if (
          validationError.includes("first_name") &&
          validationError.includes("last_name")
        ) {
          setMesssageFirstName("First name is not valid!");
          setMesssageLastName("Last name is not valid!");
        } else if (validationError.includes("first_name")) {
          setMesssageFirstName("First name is not valid!");
          setMesssageLastName("");
        } else if (validationError.includes("last_name")) {
          setMesssageLastName("Last name is not valid!");
          setMesssageFirstName("");
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ height: "82vh" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccessibilityNewOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New User
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div
              style={{
                color: "green",
              }}
            >
              {messageOk}
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              onChange={firstNameHandler}
            />
            <div
              style={{
                color: "red",
              }}
            >
              {messageFirstName}
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="lastName"
              id="lastName"
              autoComplete="lastName"
              onChange={lastNameHandler}
            />
            <div
              style={{
                color: "red",
              }}
            >
              {" "}
              {messageLastName}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
