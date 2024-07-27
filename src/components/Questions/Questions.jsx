import React, {useState} from 'react';
import './Questions.sass'
import '../../styles/main.sass'
import arrowIcon from '../../assets/arrow_icon.svg'
import arrowIconDown from '../../assets/arrow_icon_down.svg'

const Questions = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (questionId) => {
        setActiveQuestion(prevId => (prevId === questionId ? null : questionId));
    };

    return (
        <div className="questions_container">
            <div className='faq_logo_container'>
                <div className='faq_logo'>
                    <h1>FAQ</h1>
                    <p>All Your Questions <br /> Answered!</p>
                </div>
                <div className="questions">
                    {/* Вопрос 1 */}
                    <div className="question">
                        <div className="title" onClick={() => toggleQuestion(1)}>
                            <h1>01</h1>
                            <p>How long does the Cricket World <br/>
                                <span>Cup Tournament Last</span>

                            </p>
                            <img

                                src={activeQuestion === 1 ? arrowIconDown : arrowIcon}
                                alt="toggle"
                            />
                        </div>
                        {activeQuestion === 1 && (
                            <div className="info">
                                <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets
                                    can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup
                                    2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional
                                    bet points are summed up to determine a player's total points and position in the Rating
                                    Leaderboard. You can find out in more detail how points are calculated for each
                                    promotional rate in the T&C.</p>
                            </div>
                        )}
                    </div>

                    {/* Вопрос 2 */}
                    <div className="question">
                        <div className="title" onClick={() => toggleQuestion(2)}>
                            <h1>02</h1>
                            <p>What are the rounds and dates for <br/>
                                <span>the Tournament?</span>
                            </p>
                            <img

                                src={activeQuestion === 2 ? arrowIconDown : arrowIcon}
                                alt="toggle"
                            />
                        </div>
                        {activeQuestion === 2 && (
                            <div className="info">
                                <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets
                                    can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup
                                    2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional
                                    bet points are summed up to determine a player's total points and position in the Rating
                                    Leaderboard. You can find out in more detail how points are calculated for each
                                    promotional rate in the T&C.</p>
                            </div>
                        )}
                    </div>

                    {/* Вопрос 3 */}
                    <div className="question">
                        <div className="title" onClick={() => toggleQuestion(3)}>
                            <h1>03</h1>
                            <p>How can I participate in the <br/>
                                <span>Tournament?</span>
                            </p>
                            <img

                                src={activeQuestion === 3 ? arrowIconDown : arrowIcon}
                                alt="toggle"
                            />
                        </div>
                        {activeQuestion === 3 && (
                            <div className="info">
                                <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets
                                    can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup
                                    2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional
                                    bet points are summed up to determine a player's total points and position in the Rating
                                    Leaderboard. You can find out in more detail how points are calculated for each
                                    promotional rate in the T&C.</p>
                            </div>
                        )}
                    </div>
                    {/* Вопрос 3 */}
                    <div className="question">
                        <div className="title" onClick={() => toggleQuestion(4)}>
                            <h1>04</h1>
                            <p>How do I earn PrizePoints in the <br/>
                                <span>Cup Tournament Last</span>
                            </p>
                            <img

                                src={activeQuestion === 4 ? arrowIconDown : arrowIcon}
                                alt="toggle"
                            />
                        </div>
                        {activeQuestion === 4 && (
                            <div className="info">
                                <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets
                                    can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup
                                    2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional
                                    bet points are summed up to determine a player's total points and position in the Rating
                                    Leaderboard. You can find out in more detail how points are calculated for each
                                    promotional rate in the T&C.</p>
                            </div>
                        )}
                    </div>
                    {/* Вопрос 3 */}
                    <div className="question">
                        <div className="title" onClick={() => toggleQuestion(5)}>
                            <h1>05</h1>
                            <p>What rewards can I win in the <br/>
                                <span>Tournament?</span>
                            </p>
                            <img

                                src={activeQuestion === 5 ? arrowIconDown : arrowIcon}
                                alt="toggle"
                            />
                        </div>
                        {activeQuestion === 5 && (
                            <div className="info">
                                <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets
                                    can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup
                                    2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional
                                    bet points are summed up to determine a player's total points and position in the Rating
                                    Leaderboard. You can find out in more detail how points are calculated for each
                                    promotional rate in the T&C.</p>
                            </div>
                        )}
                    </div>
                    {/* Вопрос 3 */}
                    <div className="question">
                        <div className="title" onClick={() => toggleQuestion(6)}>
                            <h1>06</h1>
                            <p>How can I win a motorcycle? <br/>
                            </p>
                            <img

                                src={activeQuestion === 6 ? arrowIconDown : arrowIcon}
                                alt="toggle"
                            />
                        </div>
                        {activeQuestion === 6 && (
                            <div className="info">
                                <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets
                                    can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup
                                    2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional
                                    bet points are summed up to determine a player's total points and position in the Rating
                                    Leaderboard. You can find out in more detail how points are calculated for each
                                    promotional rate in the T&C.</p>
                            </div>
                        )}
                    </div>
                    {/* Вопрос 3 */}
                    <div className="question">
                        <div className="title" onClick={() => toggleQuestion(7)}>
                            <h1>07</h1>
                            <p>When will the prize winners be <br/>
                                <span>selected?</span>
                            </p>
                            <img

                                src={activeQuestion === 7 ? arrowIconDown : arrowIcon}
                                alt="toggle"
                            />
                        </div>
                        {activeQuestion === 7 && (
                            <div className="info">
                                <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets
                                    can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup
                                    2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional
                                    bet points are summed up to determine a player's total points and position in the Rating
                                    Leaderboard. You can find out in more detail how points are calculated for each
                                    promotional rate in the T&C.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;