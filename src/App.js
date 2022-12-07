import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
// import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
