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


      setRoundsData(prevState => ({ ...prevState, [round]: updatedPlayers }));
    }
  };

  return (
    <div className="leaderboard">
      <div className='logo_leader_container'>
        <h1>The Cricket World Cup <br/> Tournament</h1>
        <span className='text' data-text=" LEADERBOARD ">LEADERBOARD</span>
        <div className='more_prize_flex'>
          <div className="info_points">
          <div className="flex_container">
          <span className='more_white'>More prize points</span>
          <span className='arrow_icon'>&gt;&gt;</span>
          </div>
          <span className='more_chances_white'>More chances to win big!</span>
        </div>
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
          <div className="table_container_info">
            <div className="flex-container">
              <div className="left"><span>№</span></div>
              <div className="center"><span>User ID</span></div>
              <div className="right"><span>Prize Points</span></div>
            </div>
          </div>
          <div className="players_info">
            <div className="scroll_content">
              <div className="winner_container">
                {(activeRound && roundsData[activeRound] || initialPlayers).map((player, index) => (
                  <div className="winner" key={index}>
                    <div><span className='player_id'>{player.id}</span> <span
                        className='player_number'>{player.number}</span></div>
                    <div><span className='player_score'>{player.score}</span></div>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
