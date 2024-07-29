import React from 'react';
import './Footer.sass';
import hdfc_bank from '../../assets/hdfc_bank.svg';
import sbi_bank from '../../assets/sbi_bank.svg';
import icici_bank from '../../assets/icici_bank.svg';
import visa_bank from '../../assets/visa_bank.svg';
import mastercard_bank from '../../assets/mastercard_bank.svg';
import lipi_bank from '../../assets/lipi_bank.svg';
import insta_icon from '../../assets/insta_icon.svg';
import x_icon from '../../assets/x_icon.svg';
import facebook_icon from '../../assets/facebook_icon.svg';
import tg_icon from '../../assets/tg_icon.svg';
import fb_icon from '../../assets/fb_icon.svg';
import icon_18 from '../../assets/icon_18.svg';
import stop_icon from '../../assets/stop_icon.svg';
import secure_icon from '../../assets/secure_icon.svg';

const Footer = () => {
  return (
      <div className="footer_container">
          <div className="footer_flex_container">
          <div className="footer_head">
              <ul>
                  <li><img src={hdfc_bank} alt="HDFC Bank"/></li>
              </ul>
              <ul>
                  <li><img src={sbi_bank} alt="SBI Bank"/></li>
              </ul>
              <ul>
                  <li><img src={icici_bank} alt="ICICI Bank"/></li>
              </ul>
              <ul>
                  <li><img src={visa_bank} alt="Visa"/></li>
              </ul>
              <ul>
                  <li><img src={mastercard_bank} alt="MasterCard"/></li>
              </ul>
              <ul>
                  <li><img src={lipi_bank} alt="Lipi Bank"/></li>
              </ul>
          </div>
          <div className="privacy">
              <p>Privacy Policy</p>
              <div className="social_icons">
                  <img src={insta_icon} alt="Instagram"/>
                  <img src={x_icon} alt="X (Twitter)"/>
                  <img src={facebook_icon} alt="Facebook"/>
                  <img src={tg_icon} alt="Telegram"/>
              </div>
          </div>
          <div className="privacy">
              <p id='visible_gambling'>Responsible gambling</p>
              <div className="social_icons_privacy">
                  <ul>
                      <li><img src={fb_icon} alt=""/></li>
                  </ul>
                  <ul>
                      <li><img src={icon_18} alt=""/></li>
                  </ul>
                  <ul>
                      <li><img src={stop_icon} alt=""/></li>
                  </ul>
                  <ul>
                      <li><img src={secure_icon} alt=""/></li>
                  </ul>
              </div>
          </div>
      </div>
          <div className="text_container">
              <p>©️ 1994-2024 Parimatch – Best online betting company. This website is operated by PMSPORT N.V.
                  (reg. number 146906) with a registered address at Schout Bij Nacht Doormanweg 40, Curaçao.
                  This service operated under the License No. 1668/JAZ issued to Curacao eGaming.
                  Payment Agent MYRCIUS INTERNATIONAL LTD (reg. number HE 404130)
                  with a registered address at Christodoulou
                  Hatzipavlou 199, Office 4A, 4th floor, 3936, Limassol, Cyprus.</p>
          </div>
          <div className="down_container">
              <p>support@parimatch.in</p>
              <p>© PRIMATCH 2024</p>
          </div>
      </div>
  );
};

export default Footer;
