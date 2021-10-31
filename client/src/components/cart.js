import React from 'react'
import '../styles/cart.css'
const cart = (prop) => {

    return (
        <div className ="cart-items">
            <div id="label">{prop.label}</div>
            <div id="number"> x {prop.number}</div>
        </div>
    )
}

export default cart
