import React, {useEffect, useState} from 'react';
import './styles/main.sass';
import { css } from '@emotion/react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Rules from "./components/Rules/Rules.jsx";
import Changes from "./components/Changes/Changes.jsx";
import Leaderboard from "./components/Leaderboard/Leaderboard.jsx";
import {ClipLoader} from "react-spinners";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50); // имитируем асинхронную загрузку, устанавливаем таймер на 2 секунды

    return () => clearTimeout(timer);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
      <div className="app">
      {loading ? (
        <div className="loader">
          <ClipLoader color={'#000'} loading={loading} css={override} size={110} />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Rules />
          <Changes />
          <Leaderboard />
        </>
      )}
    </div>
  );
  }

export default App;