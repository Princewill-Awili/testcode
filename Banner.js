import React, { useContext } from 'react';
import { stateContext } from './context';

const Banner = () => {

  const { updateShowBanner } = useContext(stateContext);
    
  return (
    <>
      <div className="banner">
        <small onClick={ (e) => updateShowBanner(false) } className="closer">close</small>
        <h1>MY BANNER</h1>
      </div>
    </>
  )
    
}

export default Banner;