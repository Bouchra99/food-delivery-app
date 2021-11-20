import '../styles/order.css'
import { Link } from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios'
const Order = ()=>{

    const storedToken = localStorage.getItem('token');
    //delete everything from shopping cart  ! 
    useEffect(()=>{
        axios.get('http://localhost:4000/user/empty',{headers: {"token": storedToken}}).then(
            res => console.log(res)
        )
    },[])
    return(
        <div className='order'>
            <h1>Your order is validated</h1>
            <Link to='/'>Go back to home page</Link>
        </div>

    )
}

export default  Order ;