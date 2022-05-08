import React from 'react';
import standoutDesktop from '../../../images/desktop/image-stand-out.jpg';
import standoutMobile from '../../../images/mobile/image-stand-out.jpg';
import { useWindowSize } from '../../../custom-hooks/useWindowSize';
import './TransformStandout.css';

const Standout = () => {
  const [width] = useWindowSize();

  const standout = width < 900 ? standoutMobile : standoutDesktop;

  return (
    <div className="transform-standout">
      <div className="img-container">
        <img src={standout} alt="standout" />
      </div>
      <div className="transform-standout-text">
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <div className="btn-container">
          <button className={`btn btn-primary`}>
            <span className="btn-text">learn more</span>
            <div className="underline underline-yellow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Standout;
