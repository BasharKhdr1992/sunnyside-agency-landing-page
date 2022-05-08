import React from 'react';
import transformDesktop from '../../../images/desktop/image-transform.jpg';
import transformMobile from '../../../images/mobile/image-transform.jpg';
import { useWindowSize } from '../../../custom-hooks/useWindowSize';
import './TransformStandout.css';

const Transform = () => {
  const [width] = useWindowSize();

  const transform = width < 900 ? transformMobile : transformDesktop;

  return (
    <div className="transform-standout flex-reverse">
      <div className="transform-standout-text">
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className="btn-container">
          <button className={`btn btn-primary`}>
            <span className="btn-text">learn more</span>
            <div className="underline underline-soft-red" />
          </button>
        </div>
      </div>
      <div className="img-container">
        <img src={transform} alt="transform" />
      </div>
    </div>
  );
};

export default Transform;
