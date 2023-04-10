import React from 'react'
import ReacDom from 'react-dom'
import App from './App'

const mount = el => {
  ReacDom.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_core-mf-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
