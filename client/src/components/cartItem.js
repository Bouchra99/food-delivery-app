import '../styles/cart.css'
import {TiDelete} from 'react-icons/ti'
import {useEffect} from 'react'
import axios from 'axios'
const CartItem = (prop) => {
    const storedToken = localStorage.getItem('token')
    const id = prop.id;
    // console.log(id)


    const removeItem = () =>{
        // console.log("clicked")
        // console.log(id)
        axios.get(`http://localhost:4000/user/remove/${id}`,{headers : {token : storedToken}}).then(
           
        ).catch(
            err=> console.log(err.message)
        )
    }
    


    return (
        <div className = "cart-item">
       
            <div id='label'>{prop.label}</div>
            <div id='number'>x {prop.number}</div>
            <button onClick={()=>removeItem()} style={{'margin':' 7px 10px'}} className="ing-delete"><TiDelete size={25}/> </button>
        </div>
    )
}

export default CartItem
