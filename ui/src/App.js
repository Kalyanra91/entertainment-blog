import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom/dist/index.js";
import "./index.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Test from "./pages/Test";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;
