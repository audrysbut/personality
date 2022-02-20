import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

function One() {
  return <div>Home</div>;
}

function Two() {
  return <div>Path</div>;
}

function App() {
  return (
    <Router basename="/">
      <div>
        <div>
          <div>Pages:</div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/path">Path</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <One />
          </Route>
          <Route path="/path">
            <Two />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
