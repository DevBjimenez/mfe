import React from 'react'

import ReactDOM from 'react-dom'

import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'
// Mount function to start up the app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    if (onNavigate) {
        history.listen(onNavigate)
    }
    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />, el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pahtname } = history.location

            if (pahtname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

// if we are in dev mode and isolation
//call mount inmediatly

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#auth-dev-root')
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }