import React, { Suspense, lazy } from 'react';
import './styles/main.sass';
import LazyLoader from './components/LazyLoader/LazyLoader.jsx';

const Hero = lazy(() => import('./components/Hero/Hero.jsx'));
const Rules = lazy(() => import('./components/Rules/Rules.jsx'));
const Changes = lazy(() => import('./components/Changes/Changes.jsx'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard.jsx'));
const Questions = lazy(() => import('./components/Questions/Questions.jsx'));
const Footer = lazy(() => import('./components/Footer/Footer.jsx'));

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback={<LazyLoader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Rules />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Changes />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Leaderboard />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Questions />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;