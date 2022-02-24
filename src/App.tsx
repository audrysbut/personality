import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { CognitiveFunctionPage } from './pages/cognitive-functions/cognitive-functions-page';
import { NavigationBar } from './navigation/navigation';

function App() {
  return (
    <Router basename="/">
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <CognitiveFunctionPage />
        </Route>
        {/* <Route path="/cognitiveFunctions">
          <CognitiveFunctionPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
