import { createContext , useState } from "react";
import all_products from '../assets/all_product'
import Product from "../Pages/Product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
   

    const [cartItems, setCartItems] = useState([]);
    const itemCount = cartItems.length;
    const removeItemFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
    }

    

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);     }

        const contextValue = { all_products , cartItems , addToCart , itemCount , removeItemFromCart }

    return (

        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider> 



    )




};

export default ShopContextProvider