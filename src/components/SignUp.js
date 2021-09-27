import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const SignUp = ({ isSignedIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('https://api-authnode.herokuapp.com/SignUp',{
            "Email": email,
            "Password": password,
            "ConfirmPassword": confPassword
        }).then(
            (r) => {
                if (r.data.Email) {
                    setMessage('You are Successfully Signed Up!')
                }
                else {
                    setError(r.data)
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
                <h1>Sign UP</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email : </label>                
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Password : </label>                    
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <label>Confirm Password : </label>                    
                    <input type="password" name="confPassword" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                    <br />
                    <button>Sign Up</button>
                    {error && alert(error)}
                    {message && alert(message)}
                </form>
                <br /><br /><br />
                <Link to='/sign-in'>Sign In</Link>
                <br />
                <Link to='/'>Home</Link>
            </div>
        )
    )
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(SignUp)