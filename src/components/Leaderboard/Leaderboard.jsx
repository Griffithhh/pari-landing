import React from 'react';
import style from './Leaderboard.module.sass'
import leaderboard_logo from "../../assets/leaderboard_logo.svg";
import first_round_text_white from "../../assets/first_round_text_white.svg";
import second_round_text_black from "../../assets/second_round_text_black.svg";
import second_round_text_white from "../../assets/second_round_text_white.svg";
import third_round_text_white from "../../assets/third_round_text_white.svg";
import third_round_text_black from "../../assets/third_round_text_black.svg";
import first_round_text_black from "../../assets/first_round_text_black.svg";

const Leaderboard = () => {
    const [activeRound, setActiveRound] = React.useState(null);

    const handleRoundClick = (round) => {
        setActiveRound(round);
    };
   const getTableData = () => {
        const data = {
            1: [
                { id: 1, name: 'Bike 1', score: '10000' },
                { id: 2, name: 'Bike 2', score: '9000' },
            ],
            2: [
                { id: 1, name: 'Bike A', score: '8000' },
                { id: 2, name: 'Bike B', score: '7000' },
            ],
            3: [
                { id: 1, name: 'Bike X', score: '6000' },
                { id: 2, name: 'Bike Y', score: '5000' },
            ]
        };

        return data[activeRound] || [];
    };
    return (
        <>
            <div className={style.header}>
                <div className={style.headerBoardLogo}>
                    <img src={leaderboard_logo} alt=""/>
                </div>
                <div className={style.roundContainer}>
                    <div
                        onClick={() => handleRoundClick(1)}
                        className={activeRound === 1 ? style.roundActive : style.round}
                    >
                        <img
                            src={activeRound === 1 ? first_round_text_black : first_round_text_white}
                            alt=""
                        />
                    </div>
                    <div
                        onClick={() => handleRoundClick(2)}
                        className={activeRound === 2 ? style.roundActive : style.round}
                    >
                        <img
                            src={activeRound === 2 ? second_round_text_black : second_round_text_white}
                            alt=""
                        />
                    </div>
                    <div
                        onClick={() => handleRoundClick(3)}
                        className={activeRound === 3 ? style.roundActive : style.round}
                    >
                        <img
                            src={activeRound === 3 ? third_round_text_black : third_round_text_white}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={style.leaderboardTable}>
                <h2 className={style.winnerTitle}>MOTORCYCLE WINNER</h2>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                    {getTableData().map((row) => (
                        <tr key={row.id}>
                            <td>000</td>
                            <td>{row.name}</td>
                            <td>{row.score}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Leaderboard;
