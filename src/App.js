import React from "react";
// import { Container } from "react-bootstrap";
// import Container from "@mui/material/Container";
// import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UsersList";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
// import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/new" element={<AddUser />} />
        <Route path="/edit" element={<EditUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

/*
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Users" element={<UserList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
*/
