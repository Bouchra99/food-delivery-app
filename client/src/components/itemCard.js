import { Link } from "react-router-dom"
import '../styles/itemCard.css'
import axios from 'axios'
import {useState} from 'react'



const ItemCard = (prop) => {



    const storedToken = localStorage.getItem('token')
    const label = prop.label;
    const price = prop.price ;
    const ingredients = prop.ingredients ;
    
    const id = prop.id ;

    const [cart,setCart] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)

    const addToCart = () =>{
        
        // setCart(cart=>[...cart,label])
        // setTotalPrice(totalPrice+price)
        
        // console.log(cart)
        // console.log(totalPrice)
        // axios.post('http://localhost:4000/user/cart/add',{cart,totalPrice},{headers : {token : storedToken}}).then(
        //     res =>
        //     {
        //         console.log(res)
        //     }
        // )

    }


    return (
        <div className="card">
            {/* {console.log(cart)} */}
            <div className="item-image">
                <img src={prop.imageUrl} alt={label}/>
            </div>
            <div className="item-label">
               <b>{prop.label}</b> 
            </div>
            <div className="item-price">
                {prop.price} mad
            </div>
            <div className="item-buttons">
                <Link to ={`/items/${id}`}>
                    <button>Open</button>
                </Link>
                <button onClick = {()=> addToCart()}>Add to Cart</button>
            </div>

            
        </div>
    )
}

export default ItemCard
