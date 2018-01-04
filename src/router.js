import React from 'react';
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import IndexPage from './routes/IndexPage';
import home from './routes/home';
import detail from './routes/detail';
import Entry from './routes/Entry'
import ImageList from './routes/ImageList'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Entry} />
        <Route path="/imageList" component={ImageList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
