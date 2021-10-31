import axios from 'axios';
import {useState, useEffect} from 'react'
import ItemCard from '../components/itemCard'
import '../styles/items.css'
const Items = () => {
    const [items , setItems]=useState(null);
    useEffect(() => {
        axios.get('http://localhost:4000/items/').then(
            res =>  setItems(res.data)  
        )
    }, [])

    if(!items) return null ;

    return (
        <div className="items-container">
            
            {/* {console.log(items)} */}
            {items.map(item=>
                // <p>{item.label}</p>
                <ItemCard key={item.id} imageUrl = {item.imageUrl} label={item.label} price={item.price} id={item._id} ingredients = {item.ingredients}/>
            )}
        </div>
    )
}

export default Items
