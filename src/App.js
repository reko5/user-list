import React from "react";
// import { Router } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UsersList";
// import "./App.css";

function App() {
  return (
    <>
      <Header />
      <UserList />
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
