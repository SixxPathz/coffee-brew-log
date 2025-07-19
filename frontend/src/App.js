// Set up React Router with routes:
// "/" => BrewLogPage
// "/add" => AddBrewPage
// "/edit/:id" => EditBrewPage


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrewLogPage from "./pages/BrewLogPage";
import AddBrewPage from "./pages/AddBrewPage";
import EditBrewPage from "./pages/EditBrewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrewLogPage />} />
        <Route path="/add" element={<AddBrewPage />} />
        <Route path="/edit/:id" element={<EditBrewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
