import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route exact path='/' component={Home} />
                <Route exact path='/sign-in' component={SignIn} />
                <Route exact path='/sign-up' component={SignUp} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </BrowserRouter>
        </div>
    )
}

export default App
