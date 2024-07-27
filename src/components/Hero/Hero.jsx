import React from 'react';
import './Hero.sass';
import logo_pari_match from '../../assets/pari_match_logo.svg';
import button_color from '../../assets/button_color.svg';

const Hero = () => (
  <div className='hero_container'>
    <div className='navbar'>
      <div className='logo'>
        <img src={logo_pari_match} alt="Pari Match Logo" />
      </div>
    </div>
    <div className='hero'>
      <div className="header_text">
        <span className='win_text'>WIN</span>
        <span className='new_prize_text' data-text="3 New">3 New</span>
      </div>
      <div className="prize_text">
        <span className='new_prize_text' data-text=" Motorcycles" style={{bottom: 15}}>Motorcycles</span>
      </div>
      <div className="sub_text">
        <span className='from_text'>From Kajal Aggarwal</span> <br/>
        <span className="or_text">or Nicholas Pooran</span>
      </div>
      <div className="additional_text">
        <span className='and_text'>And</span>
        <span className='new_prize_text' data-text=" ₹8,00,000" style={{bottom: 10}}>₹8,00,000</span>
      </div>
      <div className="guarantee_text">
        <span className='guaranteed_text'>GUARANTEED</span>
      </div>
      <div className='play_now_wrapper'>
        <img src={button_color} alt="Play Now"/>
      </div>
      <span className='terms_text'>Terms and conditions</span>
    </div>
  </div>
);


export default Hero;