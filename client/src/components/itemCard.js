import { Link } from "react-router-dom"
import '../styles/itemCard.css'
const ItemCard = (prop) => {
    
    return (
        <div className="card">
            <div className="item-image">
                <img src={prop.imageUrl} alt={prop.label}/>
            </div>
            <div className="item-label">
               <b>{prop.label}</b> 
            </div>
            <div className="item-price">
                {prop.price}
            </div>
            <div className="item-buttons">
                <Link to ={`/items/${prop.id}`}>
                    <button>Open</button>
                </Link>
                <button>Add to Cart</button>
            </div>

            
        </div>
    )
}

export default ItemCard
