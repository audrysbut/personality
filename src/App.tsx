import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { CognitiveFunctionPage } from './pages/cognitive-functions/cognitive-functions-page';
import { NavigationBar } from './navigation/navigation';
import { ComparisonPage } from './pages/comparison/comparison-page';

function App() {
  return (
    <Router basename="/">
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <ComparisonPage />
        </Route>
        <Route path="/cognitiveFunctions">
          <CognitiveFunctionPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
