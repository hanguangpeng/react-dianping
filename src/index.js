import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './redux/configStore'
import PrimaryLayout from './pages/Layout/primaryLayout'

import './static/styl/index.styl'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <PrimaryLayout>
      
    </PrimaryLayout>
  </Provider>,
  document.getElementById('root')
)
