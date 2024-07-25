import React from 'react';
import style from './Hero.module.sass';
import win_new_text from '../../assets/win_new_text.svg'
import motorcycles_text from '../../assets/motorcycles_text.svg'
import motorcycles_subtext from '../../assets/motorcycles_subtext.svg'
import guaranteed_price_text from '../../assets/guaranteed_price_text.svg'
import guaranteed_text from '../../assets/guaranteed_text.svg'
import play_now_btn from '../../assets/play_now_btn.svg'
import btn_subtext from '../../assets/btn_subtext.svg'
import moto_img from '../../assets/moto_img.svg'
import ball from "../../assets/ball.svg";
const Hero = () => {
  return (
      <div className={style.hero}>
          <img className={style.ball} src={ball} alt=""/>
          <div>
              <div className={style.winNew}>
                  <img src={win_new_text} alt=""/></div>
              <div className={style.motoText}><img src={motorcycles_text} alt=""/></div>
              <div className={style.motoSubText}><img src={motorcycles_subtext} alt=""/></div>
              <div className={style.guaranteedPrice}><img src={guaranteed_price_text} alt=""/></div>
              <div className={style.guaranteedText}><img src={guaranteed_text} alt=""/></div>
              <div>
                  <div className={style.playBtn}>
                      <img src={play_now_btn} alt=""/>
                  </div>
                  <img className={style.btnSub} src={btn_subtext} alt=""/>
              </div>
          </div>
          <div className={style.moto_img}>
              <img src={moto_img} alt=""/>
          </div>
      </div>
  );
};

export default Hero;