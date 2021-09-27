import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../redux/actions'

const Dashboard = ({signOut}) => {
    return (
        <div>
            <h1>Welcome to the DASHBOARD</h1>
            <br />
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )
}

export default connect(null, {signOut})(Dashboard)
