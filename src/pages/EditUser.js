import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateUser } from "../services/UsersService";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function EditUser() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState({ value: "" });
  const [lastName, setLastName] = useState({ value: "" });
  const [messageOk, setMessageOk] = useState();
  const [messageNotOk, setMessageNotOk] = useState();
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
    updateUser(id, {
      first_name: firstName.value,
      last_name: lastName.value,
    })
      .then((response) => {
        console.log(response);
        setMessageOk(
          `User edited to "${
            firstName.value + " " + lastName.value
          }" in the list!`
        );
        setMessageNotOk("");
        setMesssageFirstName("");
        setMesssageLastName("");
      })
      .catch((error) => {
        console.log(error.response);
        // setMesssage(JSON.stringify(error.response.data));
        const validationError = JSON.stringify(error.response.data);
        setMessageOk("");
        setMessageNotOk(validationError);
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
            <EditOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit User:
          </Typography>
          <Typography component="h1" variant="h6">
            Need to fill both fields
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div
              style={{
                color: "purple",
              }}
            >
              {messageNotOk}
            </div>
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
              Edit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ASDASD
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"ASDASDASD"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

/*
import React from 'react'
import { useParams } from 'react-router-dom';

export default function EditUser() {
  const {id} = useParams()
  return (
    <div>EditUser {id}</div>
  )
}
*/
