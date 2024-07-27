import React from 'react';
import './styles/main.sass';
import Hero from "./components/Hero/Hero.jsx";
import Rules from "./components/Rules/Rules.jsx";
import Changes from "./components/Changes/Changes.jsx";
import Leaderboard from "./components/Leaderboard/Leaderboard.jsx";
import Questions from "./components/Questions/Questions.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {


  return (
      <div className='app'>
        <Hero />
          <Rules />
        <Changes />
          <Leaderboard />
          <Questions/>
          <Footer />
    </div>
  );
  }

export default App;