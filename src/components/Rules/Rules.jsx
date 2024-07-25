import React from 'react';
import style from './Rules.module.sass'
import rules_text from "../../assets/rules_text.svg";
import first_logo from '../../assets/first_logo.svg'
import second_logo from '../../assets/second_logo.svg'
import third_logo from '../../assets/third_logo.svg'
import join_btn from '../../assets/join_btn.svg'
const Rules = () => {
  return (
      <div className={style.rules}>
          <div>
              <img className={style.logoRules} src={rules_text} alt=""/>
          </div>
          <div className={style.logoContainer}>
              <div className={style.firstLogoContainer}><img src={first_logo} alt=""/></div>
              <div className={style.secondLogoContainer}><img src={second_logo} alt=""/></div>
              <div className={style.thirdLogoContainer}><img src={third_logo} alt=""/></div>
          </div>
          <div>
              <div className={style.joinBtn}>
                  <img src={join_btn} alt=""/>
              </div>
          </div>
      </div>
  );
};

export default Rules;