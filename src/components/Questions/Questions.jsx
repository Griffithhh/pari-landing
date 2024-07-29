import React, { useState } from 'react';
import './Questions.sass';
import '../../styles/main.sass';
import arrowIcon from '../../assets/arrow_icon.svg';
import arrowIconDown from '../../assets/arrow_icon_down.svg';

const Questions = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (questionId) => {
        setActiveQuestion(prevId => (prevId === questionId ? null : questionId));
    };

    const questions = [
        { id: 1, question: "How long does the Cricket World Cup Tournament Last", answer: "Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C." },
        { id: 2, question: "What are the rounds and dates for the Tournament?", answer: "Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C." },
        { id: 3, question: "How can I participate in the Tournament?", answer: "Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C." },
        { id: 4, question: "How do I earn PrizePoints in the Cup Tournament Last", answer: "Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C." },
        { id: 5, question: "What rewards can I win in the Tournament?", answer: "Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C." },
        { id: 6, question: "How can I win a motorcycle?", answer: "Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C." },
        { id: 7, question: "When will the prize winners be selected?", answer: "Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C." }
    ];

    return (
        <div className="questions_container">
            <div className="faq_logo_container">
                <div className="faq_logo">
                    <h1>FAQ</h1>
                    <p>All Your Questions <br /> Answered!</p>
                </div>
                <div className="questions_flex_comtainer">
                <div className="questions">
                    <div className="column1">
                        {questions.slice(0, 4).map(({ id, question, answer }) => (
                            <div className={`question ${activeQuestion === id ? 'active' : ''}`} key={id}>
                                <div className="title" onClick={() => toggleQuestion(id)}>
                                    <h1>{`0${id}`}</h1>
                                    <p>{question}</p>
                                    <img src={activeQuestion === id ? arrowIconDown : arrowIcon} alt="toggle" />
                                </div>
                                {activeQuestion === id && (
                                    <div className="info">
                                        <p>{answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="column2">
                        {questions.slice(4).map(({ id, question, answer }) => (
                            <div className={`question ${activeQuestion === id ? 'active' : ''}`} key={id}>
                                <div className="title" onClick={() => toggleQuestion(id)}>
                                    <h1>{`0${id}`}</h1>
                                    <p>{question}</p>
                                    <img src={activeQuestion === id ? arrowIconDown : arrowIcon} alt="toggle" />
                                </div>
                                {activeQuestion === id && (
                                    <div className="info">
                                        <p>{answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                    </div>
            </div>
        </div>
    );
};

export default Questions;
