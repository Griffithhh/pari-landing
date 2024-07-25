import React from 'react';
import style from './Changes.module.sass'
import changes_logo from "../../assets/changes_logo.svg";
import choose from "../../assets/choose.svg";
const Changes = () => {
  return (
      <div className={style.changesContainer}>
          <div className={style.changesLogo}>
              <img src={changes_logo} alt=""/>
              <div className={style.changes}>
                  <div className={style.changesSec}>
                      <img src={choose} alt=""/>
                  </div>

              </div>

          </div>
      </div>
  );
};

export default Changes;