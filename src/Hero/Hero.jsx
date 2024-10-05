import './Hero.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';
const Hero = () => {
    return (
      <div className='hero'>
        <div className='hero-left' >
            <h2>New Arrivals Only</h2>
            <div>
                <div className='hero-hand-icon' >
                    <p>NEW</p>
                   <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p> 
                <p>For Everyone</p>
            </div>
             <div className='hero-latest-btn'>
                <div>   NEW COLLECTION</div>
                <img src={arrow_icon} alt="" />
             </div>
        </div>

        <div className='hero-right'>
            <img src={hero_image} alt="" />

        </div>
        



      </div>

    )

}

export default Hero; 