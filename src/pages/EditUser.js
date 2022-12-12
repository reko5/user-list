import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/UsersService";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function EditUser() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [messageOk, setMessageOk] = useState();
  const [messageFirstName, setMesssageFirstName] = useState();
  const [messageLastName, setMesssageLastName] = useState();

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    const fetchUser = async (id) => {
      const { data } = await getUserById(id);
      setFirstName(data.first_name);
      setLastName(data.last_name);
    };

    fetchUser(id);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(id, {
      first_name: firstName,
      last_name: lastName,
    })
      .then((response) => {
        setMessageOk(
          `"${firstName + " " + lastName}" is in the list!`
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
          <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
            <EditOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit User
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography
              margin="normal"
              required
              fullWidth
              style={{
                color: "green",
              }}
            >
              {messageOk}
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              value={firstName}
              autoFocus
              onChange={firstNameHandler}
            />
            <Typography
              style={{
                color: "red",
              }}
            >
              {messageFirstName}
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="lastName"
              id="lastName"
              autoComplete="lastName"
              value={lastName}
              onChange={lastNameHandler}
            />
            <Typography
              style={{
                color: "red",
              }}
            >
              {" "}
              {messageLastName}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
