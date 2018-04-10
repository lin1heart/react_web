import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Entry from './routes/Entry'
import ImageDetail from './routes/ImageDetail'
import UploadImage from './routes/UploadImage'
import Category from './routes/Category'
import SnackBar from './components/SnackBar'

function Navigator({ history }) {
  return (
    <MuiThemeProvider>
      <div style={{ width: '100%', height: '100%' }}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Entry} />
            <Route path="/imageDetail/:id" component={ImageDetail} />
            <Route path="/uploadImage" component={UploadImage} />
            <Route path="/category" component={Category} />
          </Switch>
        </HashRouter>
        <SnackBar />
      </div>
    </MuiThemeProvider>
  )
}

export default Navigator
