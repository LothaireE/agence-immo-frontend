import "./App.css";
// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home.js";
import Users from "./assets/pages/Users";
import User from "./assets/pages/User";
import Realties from "./assets/pages/Realties";
import Header from "./assets/components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faBookAtlas,
  faUsers,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faBookAtlas, faUsers, faHouseUser);
const apiUrl = "http://localhost:3000/api";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users apiUrl={apiUrl} />} />
        <Route path="/user/:id" element={<User apiUrl={apiUrl} />} />
        <Route path="/realties" element={<Realties apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
