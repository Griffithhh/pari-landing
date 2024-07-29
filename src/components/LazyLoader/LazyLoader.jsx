import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './LazyLoader.sass';

const LazyLoader = () => {
  return (
    <div className="lazy-loader">
      <TailSpin
        height="100"
        width="100"
        color="#ff4500"
        ariaLabel="loading"
      />
    </div>
  );
};

export default LazyLoader;
