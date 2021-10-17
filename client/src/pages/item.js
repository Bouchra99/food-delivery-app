import {useState,useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
import ItemDescription from '../components/itemDescription';

import '../styles/item.css'

const Item = () => {
    const {id} = useParams();
    const [item,setItem]=useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/items/${id}`).then(
            res=>setItem(res.data)
        )
    }, [])

    if(!item) return null ;

    return (
        <div className="item-container">
            <ItemDescription item = {item} />
            {console.log(item)}
        </div>
    )
}

export default Item
