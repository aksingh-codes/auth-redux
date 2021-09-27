import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const request = {email, password, confPassword}
    return (
        <div>
            <form>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" name="confPassword" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                <button>Sign Up</button>
            </form>
            <Link to='/sign-in'>Sign In</Link>
        </div>
    )
}

export default SignUp