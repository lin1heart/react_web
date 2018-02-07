import React, { Component } from 'react'
import { Router, Route, Link, Switch, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Entry from './routes/Entry'
import ImageList from './routes/ImageList'
import ImageDetail from './routes/ImageDetail'
import UploadImage from './routes/UploadImage'
import Category from './routes/Category'

// @connect(({ navigator}) => navigator)
function Navigator({ history }) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Entry} />
        <Route path="/imageDetail/:id" component={ImageDetail} />
        <Route path="/uploadImage" component={UploadImage} />
        <Route path="/category" component={Category} />
      </Switch>
    </HashRouter>
  )
}

export default Navigator
