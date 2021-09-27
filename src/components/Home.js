import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/dashboard'>DASHBOARD</Link>
            <br /><br /><br />
            <Link to='/sign-in'>Sign In</Link>
            <br />
            <Link to='/sign-up'>Get Started</Link>
        </div>
    )
}

export default Home
