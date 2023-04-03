/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const IN_PROD = NODE_ENV === 'production'

if (!IN_PROD) {
  if (module.hot) {
    module.hot.accept()
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
