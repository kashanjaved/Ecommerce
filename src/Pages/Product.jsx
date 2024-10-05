import React from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import './Product.css'

const Product = () => {
    const {productId} = useParams();
    const {all_products} = useContext(ShopContext);
    const { addToCart } = useContext(ShopContext);

    // Ensure all_products is defined and is an array
    if (!all_products || !Array.isArray(all_products)) {
        return <div>Loading...</div>;
    }

    // Find the product with the matching ID
    const product = all_products.find(prod => String (prod.id) === String(productId));

    // Handle case where product is not found
    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className='prod-container'>
           <div className="prod-data">
            <div className='prod-img'>
                <img src={product.image} alt="" />
                <p>{product.name}</p>
            </div>
            <div className='prod-details'>
                <div className='prod-new-price'> ${product.new_price} </div>
                <div className='prod-old-price'> ${product.old_price} </div>
            </div>
            <button onClick={()=> addToCart(product)} >Add to Cart</button>
            </div>
            
            
        </div>
    )
}

export default Product;