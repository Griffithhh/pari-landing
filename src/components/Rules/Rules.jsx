import React from 'react';
import './Rules.sass'
import '../../styles/main.sass'
import icon_1 from '../../assets/icon_1.png'
import icon_2 from '../../assets/icon_2.png'
import icon_3 from '../../assets/icon_3.png'
import button_join from '../../assets/button_join.svg'

const Rules = () => {
  return (
      <div className="rules">
          <div className='navbar'>
              <div className='logo'>
                  <p>RULES ARE EASIER <br/> THAN EVER</p>
              </div>
          </div>
          <div className="rules_container">
              <div className="wrapper_1">
                  <img src={icon_1} alt=""/>
                  <h1 className='rules_number'>1</h1>
                  <div className="text_rules"><p className='p_txt'>Join <br></br> <span
                      className='span_txt'>Parimatch</span></p></div>
              </div>
              <div className="wrapper_2">
                  <img src={icon_2} alt=""/>
                  <h1 className='rules_number'>2</h1>
                  <div className="text_rules"><p className='p_txt'>Place bets on <br></br> <span className='span_txt'>The Cricket <br></br> World Cup <br></br> Tournament</span>
                      <br></br> <p style={{fontSize: 12}}>You can start with <br></br> a minimum of ₹750</p></p></div>
              </div>
              <div className="wrapper_3">
                  <img src={icon_3} alt=""/>
                  <h1 className='rules_number' id='rules_number_3'>3</h1>
                  <div className="text_rules" id='text_rules_3'><p className='p_txt' style={{fontSize: 12}}>Be among the first <br></br> 1,000 on the
                      Leaderboard <br></br>for a chance to win <br></br><span
                          className='span_txt'>motorcycle</span> from <br></br> <span className='span_txt'> Kajal or Pooran</span>
                  </p></div>
              </div>
              <div className="join-btn">
              <img src={button_join} alt=""/>
              </div>
          </div>
      </div>

)
    ;
};

export default Rules;