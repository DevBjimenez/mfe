import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
    return <BrowserRouter>
        <section>
            <Header></Header>
            <MarketingApp></MarketingApp>
        </section>
    </BrowserRouter>

}
export default App