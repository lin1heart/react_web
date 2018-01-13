import dva from 'dva';

import './index.css';
import { dispatchHelper } from './utils/dispatch';

// 1. Initialize
const app = dva({
  // models: () => models,
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/imageList'));
app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

app.getStore = () => app._store

dispatchHelper(app)
export default app
