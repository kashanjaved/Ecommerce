import footer_logo from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import pinterest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
import './Footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-logo">
               <img src={footer_logo} alt="" />  
               <h1>SHOPPER</h1>
               
            </div>
 
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Others</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons" >
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={pinterest} alt="" />
        </div>
        <hr />
        <div className="copyright">
            <p>Copyright © 2022. All Rights Reserved.</p>
        </div>
        </div>
    )
}

export default Footer;