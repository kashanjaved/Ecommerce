import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import './Navbar.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    const { itemCount } = useContext(ShopContext);
    

    return (

        <div className="navbar" >

            <div className="logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>

            </div>

            <ul className="menu">
                <li onClick={() => setMenu("shop")} > <Link to='/' >Shop</Link> {menu === "shop" ? <hr /> : <> </>}  </li>
                <li onClick={() => setMenu("men")} > <Link to='/mens' >Men</Link> {menu === "men" ? <hr /> : <> </>}   </li>
                <li onClick={() => setMenu("women")} > <Link to='/womens' >Women</Link> {menu === "women" ? <hr /> : <> </>}   </li>
                <li onClick={() => setMenu("kids")} > <Link to='/kids' >Kids</Link> {menu === "kids" ? <hr /> : <> </>}   </li>
            </ul>

            <div className="nav-login-cart" >
                <Link to='/login'> <button> Log In </button> </Link>
                <Link to='/cart' > <img src={cart_icon} alt="" />  </Link>
                <div className="cart-count">{itemCount}</div>
            </div>




        </div>
    )

}

export default Navbar;