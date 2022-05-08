import React from 'react';
import photographyDesktop from '../../../images/desktop/image-photography.jpg';
import graphicDesignDesktop from '../../../images/desktop/image-graphic-design.jpg';
import photographyMobile from '../../../images/mobile/image-photography.jpg';
import graphicDesignMobile from '../../../images/mobile/image-graphic-design.jpg';
import './index.css';
import { useWindowSize } from '../../../custom-hooks/useWindowSize';

const Index = () => {
  const [width] = useWindowSize();

  const photography = width < 900 ? photographyMobile : photographyDesktop;
  const graphic = width < 900 ? graphicDesignMobile : graphicDesignDesktop;

  return (
    <div className="row-container">
      <div className="img-text-container">
        <img src={graphic} alt="graphic design" />
        <div className="overlay">
          <h1 className="gd-h">Graphic design</h1>
          <p className="gd-p">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="img-text-container">
        <img src={photography} alt="photography" />
        <div className="overlay">
          <h1 className="photography-h">Photography</h1>
          <p className="photography-p">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
