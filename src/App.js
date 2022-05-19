import "./App.css";
// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home.js";
import Users from "./assets/pages/Users";
import User from "./assets/pages/User";
import Header from "./assets/components/Header";
const apiUrl = "http://localhost:3000/api";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users apiUrl={apiUrl} />} />
        <Route path="/user/:id" element={<User apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
