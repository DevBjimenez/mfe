import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})


const App = () => {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <section>
                <Header></Header>
                <MarketingApp></MarketingApp>
            </section>
        </BrowserRouter>
    </StylesProvider>


}
export default App