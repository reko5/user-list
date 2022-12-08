import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import UserList from "./components/Users";
// import "./App.css";

function App() {
  return (
    <>
      <UserList />
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
