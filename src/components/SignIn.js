import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { signIn } from '../redux/actions'
import axios from 'axios'

const SignIn = ({isSignedIn, signIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('https://api-authnode.herokuapp.com/Signin',{
            "Email": email,
            "Password": password
        }).then(
            (r) => {
                if (r.data.msg && r.data.msg === 'Succesfully Logged In') {
                    signIn()
                } else if (r.data && r.data.slice(0,5) === 'Error') {
                    setError(r.data)
                }
                else {
                    setError('Error Occured')
                }
            }
        ).catch(
            err => setError(err)
        )
    }

    return (
        isSignedIn 
        ? <Redirect to='/dashboard' />
        : ( 
            <div>
            <h1>Sign IN</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label >Password:</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button>Sign In</button>

                    {error && alert(error)}
                </form>
                <br /><br /><br />
                <Link to='/sign-up'>Sign Up</Link>
            </div>
        )
        
    )
}

const mapStateToProps = state => {
    return {
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn} )(SignIn)
