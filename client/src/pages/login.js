import axios from "axios";
import { useState, useContext } from "react"
import UserContext from '../userContext'
import {useHistory } from 'react-router-dom'
import '../styles/login.css'
const Login = () => {
    
    // const history  = useHistory();
    const {logedIn,setLogedIn} = useContext(UserContext)
    // const {token,setToken} = useContext(UserContext)
    
    
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const user = {username , password}

   
    
    

    const login = async () => {
        console.log('login clicked')
        if(username !== "" && password !== ""){
            axios.post('http://localhost:4000/user/login',user).then( 
                res => {
                //  console.log(res.status)
                //   console.log(res.data.token)
               
                   setLogedIn(true);
                   localStorage.setItem("token",  res.data.token);
    
                   window.history.replaceState(null, null, '/');
                   window.location = "/items";
             
              }).catch(err=>{
              
                  const erreur = err.response?.status 
                  if(erreur === 401){
                      window.alert("invalid username or password")
                      setUsername("")
                      setPassword("")
                  }
    
                  console.log(err)
                
                })
        }else{
            window.alert('insert all information')
        }
       
    }

    return (
        <div className="login-form">
           
                <h1>Login</h1>
                {/* <label for = "usename">usename : </label> */}
                <input 
                    placeholder = "username"
                    id = "username"
                    type = "text"
                    value = {username}
                    onChange = {e => setUsername(e.target.value)}
                />
                {/* <label for ="password">password : </label> */}
                <input
                    placeholder = "password"
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
