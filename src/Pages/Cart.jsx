import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Cart.css';

const Cart = () => {
  const { cartItems , removeItemFromCart } = useContext(ShopContext);

  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div className='cart-list' key={index}>
              <img src={item.image} alt={item.name} />
              <div className='cart-details' >
              <p>{item.name}</p> 
              <p className='new-price'>New Price: ${item.new_price}</p> 
              <p className='old-price'>Old Price: ${item.old_price}</p>
              <button onClick={() => removeItemFromCart(item.id)} >Remove from Cart</button>

              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
