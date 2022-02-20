import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RootPage } from './pages/root/root-page';

function App() {
  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route exact path="/">
            <RootPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
