import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history} children={routes} />,
  document.getElementById('root'),
)
registerServiceWorker()
