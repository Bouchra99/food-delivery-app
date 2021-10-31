import {useState,useContext} from 'react'
import axios from 'axios'
import '../styles/register.css'
import UserContext from '../userContext'
const Register = () => {

    const {logedIn,setLogedIn} = useContext(UserContext)

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [adress,setAdress] = useState('')
    const [email,setEmail] = useState('')

    const user = {firstName,lastName,username,password,phone,adress,email}
    const register = async () => {
        console.log('register clicked');
        axios.post('http://localhost:4000/user/register',user).then(
            res => {
                
                setLogedIn(true);
                localStorage.setItem("token",  res.data.token);
 
                window.history.replaceState(null, null, '/');
                window.location = "/items";
            }
        ).catch(
            err =>{ 
                // console.log(err.response.status)
                const erreur = err.response?.status
                if(erreur === 400){
                    window.alert('client already saved. Try a new username')
                }
            }
        )
    }

    return (
        <div className = "registration-form">

            <h1>Register</h1>
            {/* <label for = "fisrtName">Your First Name</label> */}
            <input 
                placeholder = "First Name"
                id = "firsName"
                type = "text"
                value = {firstName}
                onChange = {(e)=>setFirstName(e.target.value)}
            />
            {/* <label for = "lastName">Your Last Name</label> */}
            <input 
                placeholder = "Last Name"
                id = "lastName"
                type = "text"
                value = {lastName}
                onChange = {(e)=>setLastName(e.target.value)}
            />
            {/* <label for = "username">Your Username</label> */}
            <input 
                placeholder = "Username"
                id = "username"
                type = "text"
                value = {username}
                onChange = {(e)=>setUsername(e.target.value)}
            />
            {/* <label for = "password">Your Password</label> */}
            <input 
                placeholder = "Password"
                id = "password"
                type = "password"
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)}
            />
             {/* <label for = "password">Your Phone</label> */}
            <input 
                placeholder = "Phone Number"
                id = "phone"
                type = "text"
                value = {phone}
                onChange = {(e)=>setPhone(e.target.value)}
            />
             {/* <label for = "adress">Your Adress</label> */}
            <input 
                placeholder = "Home Adress"
                id = "adress"
                type = "text"
                value = {adress}
                onChange = {(e)=>setAdress(e.target.value)}
            />
             {/* <label for = "email">Your Email</label> */}
            <input 
                placeholder = "Email"
                id = "email"
                type = "text"
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
            />

            <button onClick = {()=>register()}>Register</button>
            

        </div>
    )
}

export default Register
