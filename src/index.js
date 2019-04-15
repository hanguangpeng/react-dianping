import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './redux/configStore'
import PrimaryLayout from './pages/Layout/primaryLayout'
import { RouterMap } from './router/routerMap'

import './static/styl/index.styl'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <PrimaryLayout>
      <RouterMap />
    </PrimaryLayout>
  </Provider>,
  document.getElementById('root')
)
