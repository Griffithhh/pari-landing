import React from 'react';
import './Changes.sass'
import '../../styles/main.sass'

const Changes = () => {
  return (
      <div className="changes">
          <div className='navbar'>
              <div className='logo-m'>
                  <p>MAXIMIZE YOUR WINNING CHANGES!</p>
              </div>
          </div>
          <div className="box_container">
              <div className="box">
                  <div className="two_variables_container">
                      <div className="variables">
                          <h1>1.</h1>
                          <div className="choice">
                              <h2>CHOOSE</h2>
                              <div className="high">HIGH</div>
                              <div className="odds">ODDS</div>
                          </div>
                      </div>
                      <div className="variables">
                          <h1>2.</h1>
                          <div className="choice">
                              <h2>TRY</h2>
                              <div className="high">HIGH</div>
                              <div className="odds">ODDS</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Changes;