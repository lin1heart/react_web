import dva from 'dva'

import './index.css'
import { dispatchHelper } from './utils/dispatch'
import models from './models'
import Router from './Navigator'
import { printLog } from './utils/config'

// 1. Initialize
const app = dva({
  // models: () => models,
})

// 2. Plugins
// app.use({});

// 3. Model
for (let model of models) {
  app.model(model)
}

// 4. Router
app.router(Router)

// 5. Start
app.start('#root')

app.getStore = () => app._store

dispatchHelper(app)

if (!printLog) {
  console.log = () => {}
}

export default app
