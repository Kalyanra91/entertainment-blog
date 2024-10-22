import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;
