import React, { useState } from 'react';
import './Leaderboard.sass';
import '../../styles/main.sass';
import initialPlayers from '../../data/players.js';

const Leaderboard = () => {
  const [activeRound, setActiveRound] = useState(null);
  const [roundsData, setRoundsData] = useState({});

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  };

  const getRandomScore = () => {
    return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  };

  const handleRoundClick = (round) => {
    setActiveRound(round);

    if (!roundsData[round]) {
      const updatedPlayers = initialPlayers.map(player => ({
        ...player,
        number: getRandomNumber(),
        score: getRandomScore()
      }));

      // Обновляем состояние раундов
      setRoundsData(prevState => ({ ...prevState, [round]: updatedPlayers }));
    }
  };

  return (
    <div className="leaderboard">
      <div className='logo_leader_container'>
        <div className='logo-leader'>
          <h1>The Cricket World Cup <br /> Tournament</h1>
          <span className='text' data-text=" LEADERBOARD ">LEADERBOARD</span>
          <div>More prize points</div>
          <span className='arrow_icon'>&gt;&gt;</span>
          <div style={{ width: 337 }}>More chances to win big!</div>
        </div>
      </div>
      <div className="rounds_container">
        <div className='btn-container'>
          <button
            className={activeRound === 1 ? 'active_btn' : 'disabled_btn'}
            onClick={() => handleRoundClick(1)}
          >
            1 Round
          </button>
          <button
            className={activeRound === 2 ? 'active_btn' : 'disabled_btn'}
            onClick={() => handleRoundClick(2)}
          >
            2 Round
          </button>
          <button
            className={activeRound === 3 ? 'active_btn' : 'disabled_btn'}
            onClick={() => handleRoundClick(3)}
          >
            3 Round
          </button>
        </div>
        <div className='moto_winner_container'>
          <p>MOTORCYCLE WINNER</p>
          <span>00000</span>
        </div>
        <div className="table_container">
          <div className="scroll_content">
            <div className="winner_container">
              {(activeRound && roundsData[activeRound] || initialPlayers).map((player, index) => (
                <div className="winner" key={index}>
                  <div>{player.id} <span>{player.number}</span></div>
                  <div>{player.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
