import React from 'react';
import './Item.css';
import data_product from '../assets/data';


const Item = () => {
    
    return (
        <>
        <div className='item-title'>
         <h1>Popular in Women</h1>
         <hr />
         </div>
        <div className='item-container'>
            
          {data_product.map((item) => (

            
            <div className='item' key={item.id}>
                
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <div className="item-prices">
                <div className='item-price-new'>${item.new_price}</div>
                <div className='item-price-old'>${item.old_price}</div>
              </div>
              </div>
        
          ))}
        </div>
        </>
      );
    };

export default Item;