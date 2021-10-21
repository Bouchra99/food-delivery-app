import axios from "axios";
import { useState, useContext } from "react"
import UserContext from '../userContext'
import {useHistory } from 'react-router-dom'
import '../styles/login.css'
const Login = () => {
    
    // const history  = useHistory();
    const {logedIn,setLogedIn} = useContext(UserContext)
    const {token,setToken} = useContext(UserContext)
    
    
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const user = {username , password}

   
    
    

    const login = async () => {
        console.log('login clicked')
        axios.post('http://localhost:4000/user/login',user).
          then( res => {
              console.log(res.data.token)
           
               setLogedIn(true);
               localStorage.setItem("token",  res.data.token);
            
            //   window.location = "/items";
         
          })
    }

    return (
        <div className="login-form">
            <h1>Login</h1>
            <label for = "usename">usename : </label>
            <input 
                id = "username"
                type = "text"
                value = {username}
                onChange = {e => setUsername(e.target.value)}
            />
            <label for ="password">password : </label>
            <input
                id="password"
                type = "password"
                value = {password}
                onChange = {e => setPassword(e.target.value)}
            />
            <button onClick={()=>login()}>Login</button>

            {/* {logedIn ? "True" : "False"} */}
        </div>
    )
}

export default Login
