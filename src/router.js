import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import AllPages from './Pages/AllPages'
import Header from './components/header'

const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
                <Route exact path={`/`} component={AllPages} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router