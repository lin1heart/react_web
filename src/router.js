import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import IndexPage from './routes/IndexPage';
import home from './routes/home';
import detail from './routes/detail';
import Entry from './routes/Entry'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/example" component={Entry} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
