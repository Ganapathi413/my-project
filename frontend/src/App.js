import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recommendations from "./pages/Recommendations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
