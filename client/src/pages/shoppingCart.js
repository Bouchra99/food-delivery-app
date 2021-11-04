import axios from 'axios'
import UserContext from '../userContext'
import {useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import '../styles/cart.css'
import CartItem from '../components/cartItem'

const ShoppingCart = () => {
    
    const [cart , setCart] = useState([])
    const [cost , setCost] = useState(0)

    const storedToken = localStorage.getItem('token');
    
    const getCart = () =>{
        axios.get('http://localhost:4000/user/cart',{headers: {"token": storedToken}}).then( res =>
          {
            setCart(res.data.items);
            setCost(res.data.cost);

            // console.log(cart)
            console.log(res.data.cost)
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
              {cart ? cart.map(
                  item => <CartItem key={item._id} id={item._id} label = {item.label} number = {item.number} />
                  ) : <p>your Shopping Cart is empty</p>}
             </div>
             <div className="cost">Total cost : <b>{cost? cost : 0}</b> mad</div>
             <br/>
            <Link to='/items'>
               <b> Add more items </b> 
            </Link>
        </div>
    )
}

export default ShoppingCart
