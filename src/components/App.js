import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'

const App = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/sign-up' component={SignUp} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App
