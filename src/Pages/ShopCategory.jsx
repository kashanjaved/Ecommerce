import { useContext } from "react";
import React from 'react';
import { ShopContext } from "../Context/ShopContext";
import './ShopCategory.css';
import dropdown_icon from '../assets/dropdown_icon.png';
import { Link } from 'react-router-dom';

const ShopCategory = ({ banner, category }) => {
    const { all_products } = useContext(ShopContext);

    // Filter products based on the category
    const filteredProducts = all_products.filter(product => product.category === category);

    return (
        <div className="shop-category-container">
            <img className="banner-image" src={banner} alt="" />

            <div className="shop-category-para">
                <p><span>Showing 1-12</span> out of {filteredProducts.length} products</p>
                <div className="shop-category-dropdown">
                    Sort By <img src={dropdown_icon} alt="" />
                </div>
            </div>

            <div className="shop-category-products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                   < Link to={`/product/${item.id}`} key={item.id} >

                        <div className='collection-item' key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <div className="collection-item-prices">
                                <div className='collection-item-price-new'>${item.new_price}</div>
                                <div className='collection-item-price-old'>${item.old_price}</div>
                            </div>
                        </div>
                        
                    </Link>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default ShopCategory;
