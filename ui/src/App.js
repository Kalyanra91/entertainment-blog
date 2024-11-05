import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom/dist/index.js";
import "./index.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Test from "./pages/Test";
import ProfilePage from "./pages/ProfilePage";
import Write from "./pages/Write";
import Landing from "./pages/Landing";
import BlogComponent from "./components/BlogComponent";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/write" element={<Write />} />
        <Route path="/blog" element={<BlogComponent />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
