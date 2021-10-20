import {useState} from 'react'
import axios from 'axios'
import '../styles/register.css'
const Register = () => {
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
            res => console.log(res)
        )
    }

    return (
        <div className = "registration-form">

            <h1>Register</h1>
            <label for = "fisrtName">Your First Name</label>
            <input 
                id = "firsName"
                type = "text"
                value = {firstName}
                onChange = {(e)=>setFirstName(e.target.value)}
            />
            <label for = "lastName">Your Last Name</label>
            <input 
                id = "lastName"
                type = "text"
                value = {lastName}
                onChange = {(e)=>setLastName(e.target.value)}
            />
            <label for = "username">Your Username</label>
            <input 
                id = "username"
                type = "text"
                value = {username}
                onChange = {(e)=>setUsername(e.target.value)}
            />
            <label for = "password">Your Password</label>
            <input 
                id = "password"
                type = "password"
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)}
            />
             <label for = "password">Your Phone</label>
            <input 
                id = "phone"
                type = "text"
                value = {phone}
                onChange = {(e)=>setPhone(e.target.value)}
            />
             <label for = "adress">Your Adress</label>
            <input 
                id = "adress"
                type = "text"
                value = {adress}
                onChange = {(e)=>setAdress(e.target.value)}
            />
             <label for = "email">Your Email</label>
            <input 
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
