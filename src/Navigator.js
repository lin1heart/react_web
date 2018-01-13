import React, { Component } from 'react';
import {
  Router,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'

import Entry from './routes/Entry'
import ImageList from './routes/ImageList'
import ImageDetail from './routes/ImageDetail'
import UploadImage from './routes/UploadImage'
import Category from './routes/Category'

// @connect(({ navigator}) => navigator)
function Navigator ({ history }) {
    console.log('history is ', history);
    console.log('BrowserRouter is ', BrowserRouter);
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Entry} />
          <Route path="/imageList" component={ImageList} />
          <Route path="/imageDetail/:id" component={ImageDetail} />
          <Route path="/uploadImage" component={UploadImage} />
          <Route path="/category" component={Category} />
        </Switch>
      </BrowserRouter>
    );
}

export default Navigator;
