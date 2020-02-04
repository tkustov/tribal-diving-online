import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Course1 } from './course1';

import styles from './app.module.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/course1/:section" component={Course1} />
        <Route path="/course1" component={Course1} />
        <Route render={() => (
          <Redirect to="/course1" />
        )}/>
      </Switch>
    </Router>
  );
}

export default App;
