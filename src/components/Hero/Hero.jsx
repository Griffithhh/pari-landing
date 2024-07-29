import React from 'react';
import './Hero.sass';
import logoPariMatch from '../../assets/pari_match_logo.svg';
import buttonColor from '../../assets/button_color.svg';

const Hero = () => (
  <div className='hero-container'>
    <div className='hero__navbar'>
      <div className='hero__logo'>
        <img src={logoPariMatch} alt="Pari Match Logo" />
      </div>
    </div>
    <div className='hero'>
      <div className="hero__header-text">
        <span className='hero__win-text'>WIN</span>
        <span className='hero__new-prize-text' data-text="3 New">3 New</span>
      </div>
      <div className="hero__prize-text">
        <span className='hero__new-prize-text' data-text="Motorcycles">Motorcycles</span>
      </div>
      <div className="hero__sub-text">
        <span className='hero__from-text'>From Kajal Aggarwal</span> <br/>
        <span className="hero__or-text">or Nicholas Pooran</span>
      </div>
      <div className="hero__additional-text">
        <span className='hero__and-text'>And</span>
        <span className='hero__new-prize-text' id="hero__new-prize-text" data-text=" ₹8,00,000" style={{bottom: 10}}>₹8,00,000</span>
      </div>
      <div className="hero__guarantee-text">
        <span className='hero__guaranteed-text'>GUARANTEED</span>
      </div>
      <div className='hero__play-now-wrapper'>
        <img src={buttonColor} alt="Play Now"/>
      </div>
      <span className='hero__terms-text'>Terms and conditions</span>
    </div>
  </div>
);

export default Hero;
