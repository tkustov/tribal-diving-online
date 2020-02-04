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
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/course1" component={Course1} />
          <Route exact path="/">
            <Redirect to="/course1" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
