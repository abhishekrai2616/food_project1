import React from 'react';
import './Hero.css';
import redVector from '../assets/Vector1.png';
import foodtruck from '../assets/foodtruck.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="logo-container">
                <img src={foodtruck} alt="Logo" className="logohero" />
                <button className="get-in-touch-button">Get In Touch</button>
            </div>
            <div className='heroSection'>
                <div className="text-content">
                    <p id='headline'>Discover the <strong id="highlight">Best</strong> Food and Drinks</p>
                    <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                    <button className="explore-button">Explore Now!</button>
                </div>
                <div className="image-container">
                    <img src="https://s3-alpha-sig.figma.com/img/c2a9/c613/9cad959fc06da22d2d90d91c2fed69db?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxlHevubyX5hq7~AolreMbzrVddqHduc5cti4UXuGU6KqRJZUgy8hU95jVq42IaAKwntYI3LUDc1RGeDZQE38VN-d5lUo0NhLKkhgdnrM9OMT~yzybNkzy~esw7tRRliecsrB-u6mHdwWBPBSdAKtqI1rzEg6HjI39~UyM1426QeAch3GXg4q5cwlngjsHGlreHCyXxvMsCqzjCwRWUBG90zsh3Pt2ZqdAey4nFP-2ZjqWa5ZfdAs3lkJ9BbkHWeR6hItKiHp9vah0TZ58F3M9p7yapcYIbpDmqgh2I6MPxq8-82sHnkeYH5-do2QIz7F1Zp8dYGMs-4bBtfFUbYPA__" alt="Pizza" className="pizza-image" />
                    <img src={redVector} alt="Pizza" className="redVector-image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;