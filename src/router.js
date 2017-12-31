import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import home from './routes/home';
import detail from './routes/detail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/list" exact component={home} />
        <Route path="/detail" exact component={detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
