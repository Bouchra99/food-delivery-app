import '../styles/itemDescription.css'
import {useState} from 'react'
import {TiDelete} from 'react-icons/ti'
import axios from 'axios'
const ItemDescription = (prop) => {
    const storedToken = localStorage.getItem('token')

    const item = prop.item;
    const initialPrice = item.price ;
    const initialIngredients = item.ingredients;
    const label = item.label;
    const [price,setPrice] = useState(initialPrice);
    const [number,setNumber] = useState(1);
    const [ingredients,setIngredients] = useState(initialIngredients);

    const addToCart = () =>{
        
 
        axios.post('http://localhost:4000/user/cart/add',{label,number,price,ingredients},{headers : {token : storedToken}}).then(
            res =>
            {
                console.log(res)
            }
        )

    }
    return (
        <div className="item-description">
            
            <div className="item-desc-image">
                <img src={item.imageUrl} alt={item.label} />
            </div>

            <div className="item-details">
                <div className="item-desc-label">{item.label}</div>
                <div className = "item-desc-ingredients">
                    {ingredients.map(
                        ing => <div key = {ingredients.indexOf(ing)} className="ingredients-list">
                            {ing}
                            <button className="ing-delete" onClick={()=>{
                                const myIngredients = ingredients.filter( i => i !== ing)
                                setIngredients(myIngredients)
                            }}
                            > 
                                <TiDelete size={18} />
                            </button>
                        </div>
                    )}
                 </div>
                <div className = "item-number">
                    <label for="number">Number : </label>  
                    <input
                        id="number"
                        min = "1"
                        type = "number"
                        value = {number}
                        onChange ={e=>{
                            setNumber(e.target.value);
                            setPrice(initialPrice*e.target.value)
                        
                        }}
                    />
                  </div>
                <div className = "item-desc-price">
                    {price} mad
                 </div>

                <button onClick={()=>addToCart()}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemDescription
