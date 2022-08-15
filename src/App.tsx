import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./navigation/navigation";
import { InspectPage } from "./pages/inspect/inspect-page";
import { PersonalityPage } from "./pages/personality-page/personality-page";

function App() {
  return (
    <Router basename="/">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<InspectPage />} />
        <Route path="personality/:type" element={<PersonalityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
