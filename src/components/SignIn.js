import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signIn } from '../redux/actions'

const SignIn = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const request = {email, password}

    console.log(props.signIn);
    return (
        <div>
            <form>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Sign In</button>
            </form>
            <Link to='/sign-up'>Sign Up</Link>
        </div>
    )
}

export default connect(null, {signIn})(SignIn)
