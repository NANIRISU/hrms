import React from 'react'

const Login=(props)=>{
    const loginClickHandler=()=>{
        //api call here jwt token
        const jwtToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem('Access-Token',jwtToken)
        // props.setIsLoggedIn(true)
        props.history.push('/')
    }
    return (
        <div>
       <button onClick={loginClickHandler}>Login</button>  
       <h1>Login</h1>   
        </div>
    )
}

export default Login
