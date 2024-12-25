import React, { useState } from 'react';
import './style.css'; 
import prodimg from '../assets/OIP.jpeg'

const Cart = () => {
    
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product Name', price: 500, quantity: 1, imageUrl: 'OIP.jpeg' },
        
    ]);

    
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

   
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div>
            <header>
                <h1 style={{fontSize:"35px",fontWeight:"bold"}} >Rentomojo</h1>
                <nav>
                    <a href="#"><b>Home</b></a>
                    <a href="#"><b>Categories</b></a>
                    <a href="#"><b>Contact</b></a>
                </nav>
            </header>

            <main>
                <br />
                <h2 style={{fontSize:"30px",fontWeight:"bold",fontStyle:"italic"}}>Your Cart</h2>
                <br />
                <div className="cart-container">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item"><br />
                            <img src={prodimg} alt="Product Image" />
                            <div className="item-details">
                                <h3 style={{fontSize:"20px",fontWeight:"bold"}}>{item.name}</h3><br />
                                <p style={{fontWeight:"bold",fontSize:"19px"}}>₹<span className="price">{item.price}</span>/mo</p><br />
                                <button style={{border:"2px solid black",padding:"2px 4px", backgroundColor:"whitesmoke"}} className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                            <div className="item-quantity">
                                <button style={{backgroundColor:"grey",color:"black",fontSize:"20px"}} className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button style={{backgroundColor:"grey",color:"black",fontSize:"20px"}} className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <p style={{fontSize:"20px",fontWeight:"bold"}}>Total: ₹<span id="total-amount">{calculateTotal()}</span>/mo</p><br />
                    <button className="checkout-btn">Proceed to Checkout</button>
                    <a href="/mumbai/catalog" className="rm-btn rm-red-btn">
                        Browse catalogue
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Cart;
