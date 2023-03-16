import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path='/' element={<Login />}>
        </Route>
      </Routes>
    </>
  );
};

export default App;
