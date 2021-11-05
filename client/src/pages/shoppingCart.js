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
              console.log(res.data)
              setCart(res.data.items);
              setCost(res.data.cost);
          }
        ).catch( err => 
           { console.log(err.message)
        // window.location = '/login'
        })
       
     
    }


    useEffect(() => { 
        console.log('render')
        getCart()
    },[cart])


    return (
        <div className = "cart">
        
             <div>
              {/* {console.log(cart)} */}
              { cart?.length > 0 ? cart.map(
                  item => <CartItem key={item._id} id={item._id} label = {item.label} number = {item.number} price ={item.price}/>
                  ) : <h2>Your cart is empty</h2>}
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
