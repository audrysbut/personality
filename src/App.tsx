import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CognitiveFunctionPage } from './pages/cognitive-functions/cognitive-functions-page';
import { NavigationBar } from './navigation/navigation';
import { ComparisonPage } from './pages/comparison/comparison-page';
import { InspectPage } from './pages/inspect/inspect-page';

function App() {
  return (
    <Router basename="/">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<InspectPage />} />
        <Route path="/cognitiveFunctions" element={<CognitiveFunctionPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
