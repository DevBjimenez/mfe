import React from 'react'
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import SignIn from './components/Signin'
import SignUp from './components/Signup'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})


const App = ({ history, onSignIn }) => {
    return <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
            <Switch>
                <Route exact path="/auth/signin/"  >
                    <SignIn onSignIn={onSignIn}></SignIn>
                </Route>
                <Route path="/auth/signup/"  >
                    <SignUp onSignIn={onSignIn} />
                </Route>
            </Switch>
        </Router>
    </StylesProvider>

}

export default App