import React from 'react'

import ReactDOM from 'react-dom'

import App from './App'
// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />, el
    )
}

// if we are in dev mode and isolation
//call mount inmediatly

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }