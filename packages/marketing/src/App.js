import React from 'react'
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

import Landing from './components/Landing'
import Princing from './components/Pricing'
const App = ({ history }) => {
    return <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
            <Switch>
                <Route exact path="/pricing" component={Princing} />
                <Route path="/" component={Landing} />
            </Switch>
        </Router>
    </StylesProvider>

}

export default App