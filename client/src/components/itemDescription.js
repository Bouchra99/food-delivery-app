import '../styles/itemDescription.css'
import {useState} from 'react'
const ItemDescription = (prop) => {
    const item = prop.item;
    const [price,setPrice] = useState(item.price);
    const [number,setNumber] = useState(1);
    
    return (
        <div className="item-description">
            
            <div className="item-desc-image">
                <img src={item.imageUrl} alt={item.label} />
            </div>

            <div className="item-details">
                <div className="item-desc-label">{item.label}</div>
                <div className = "item-desc-ingredients">
                    ingredients
                 </div>
                <div className = "item-number">
                    {number}
                  </div>
                <div className = "item-desc-price">
                    {price}
                 </div>

                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemDescription
