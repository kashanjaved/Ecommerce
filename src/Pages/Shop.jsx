import React from 'react'
import Hero from '../Hero/Hero'
import Item from '../Item/Item.jsx'
import Offer from '../Offers/Offer.jsx'
import NewCollection from '../NewCollection/NewCollection.jsx'
import Newsletter from '../NewsLetter/Newsletter.jsx'
import './Shop.css'

const Shop = () => {
    
    return (
        <div>
          <Hero/>
          <Item/>
          <Offer/>
          <NewCollection/>
          <Newsletter/>
        </div>
    )

}

export default Shop;