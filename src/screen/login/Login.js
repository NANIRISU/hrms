import {Button} from 'antd'
import React, { useState,useEffect } from 'react'
import NewButton from '../../component/button/NewButton'
import Input from '../../component/input/Input';

const Login=(props)=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errormsg,setErrorMsg]=useState('')


    // useEffect(() => {
    //     if(email !==''){
    //         if (!email.includes('@'))
    //         {
    //             setErrorMsg('inavlid email')
    //         }
    //         else{
    //             setErrorMsg('')
    //         }
    //     }
    // },[email,password])


    const loginClickHandler=()=>{
        //api call here jwt token
        const jwtToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem('Access-Token',jwtToken)
        // props.setIsLoggedIn(true)
        props.history.push('/')
    }


const emailChangeHandler=(event)=>setEmail(event.target.value)


const passwordChangeHandler=(event)=>setPassword(event.target.value)

// console.log(email,password)
const onBlur=(name)=>{
    switch (name) {
        case'email':
        if(email!==""){
                    if (!email.includes('@'))
                    {
                        setErrorMsg({...errormsg,email:'invalid email'})
                    }
                    else{
                        setErrorMsg({...errormsg,email:''})
                    }
                }
    
            case'password':
            let regexEpression=new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)
            if(password!==""){
                // if (password.length< 6)
                // {
                //     setErrorMsg({...errormsg,password:'invalid password'})
                // }
                // else{
                //     setErrorMsg({ ...errormsg,password:''})
                // }
               
          
            
            if(!regexEpression.test(password))
          {
            setErrorMsg({...errormsg,password:'password sholud contains the special character like @!#$,and numeric and capital letter and smaller letter'})
        break;  
        }
        setErrorMsg({ ...errormsg,password:''})
        }
                break;
        default:
            break;
    }
}
  
    return (
        <div className="login">
            <div className="form-container" >
                <div className="banner-title"><h3>HRMS</h3> </div>
               <form className="form">
               {/* {errormsg &&  <p style={{marginBottom:16,color:"red",}}>
                       {errormsg}
                   </p>} */}
                   <Input name='email' classes={{inputComponentClass:"login-input" }}value={email} onChange={emailChangeHandler} type="email" placeholder="Enter email..." onBlur={(event)=>onBlur(event.target.name)} onFocus={()=>console.log("on focus")} errors={errormsg.email} />
                   
                   <Input name="password" classes= {{inputComponentClass:"login-input" }} value={password} onChange={passwordChangeHandler} type="password" placeholder="Enter password..."onBlur={(event)=>onBlur(event.target.name)} errors={errormsg.password}  />
                   
                  <NewButton type="submit" className="login-btn">Login</NewButton>
                  <h4>The admin have access this button</h4>
                   <Button onClick={loginClickHandler} className="admin-btn">Login</Button>
               </form>
            </div>
       {/* <button onClick={loginClickHandler}>Login</button>  
       <h1>Login</h1>    */}
        </div>
    )
}

export default Login
