import axios from 'axios'
import UserContext from '../userContext'
import {useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import '../styles/cart.css'
import Cart from '../components/cart'

const ShoppingCart = () => {
    
    const [cart , setCart] = useState([])
    const storedToken = localStorage.getItem('token');
    
    const getCart = () =>{
        axios.get('http://localhost:4000/user/cart',{headers: {"token": storedToken}}).then( res =>
          {
            setCart(res.data.cart);
            console.log(cart)
          }
        ).catch( err => 
           { console.log(err.message)
        // window.location = '/login'
        })
    }

    useEffect(() => {
        getCart()
    }, [])
    

    // console.log(cart)
    return (
        <div className = "cart">
             <div>
              {console.log(cart)}
              { cart?.items?.map(
                  item => <Cart key={cart._id} label = {item.label} number = {item.number} />
                  ) }
             </div>
             <div>Total cost : {cart?.cost} mad</div>
             <br/>
            <Link to='/items'>
                add more items 
            </Link>
        </div>
    )
}

export default ShoppingCart
