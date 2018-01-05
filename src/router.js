import React from 'react';
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Entry from './routes/Entry'
import ImageList from './routes/ImageList'
import ImageDetail from './routes/ImageDetail'
import UploadImage from './routes/UploadImage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Entry} />
        <Route path="/imageList" component={ImageList} />
        <Route path="/imageDetail" component={ImageDetail} />
        <Route path="/uploadImage" component={UploadImage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
