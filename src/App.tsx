import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./navigation/navigation";
import { InspectPage } from "./pages/inspect/inspect-page";

function App() {
  return (
    <Router basename="/">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<InspectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
