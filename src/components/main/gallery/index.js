import React from 'react';
import coneDesktop from '../../../images/desktop/image-gallery-cone.jpg';
import milkbottlesDesktop from '../../../images/desktop/image-gallery-milkbottles.jpg';
import orangeDesktop from '../../../images/desktop/image-gallery-orange.jpg';
import sugarcubesDesktop from '../../../images/desktop/image-gallery-sugarcubes.jpg';

import coneMobile from '../../../images/mobile/image-gallery-cone.jpg';
import milkbottlesMobile from '../../../images/mobile/image-gallery-milkbottles.jpg';
import orangeMobile from '../../../images/mobile/image-gallery-orange.jpg';
import sugarcubesMobile from '../../../images/mobile/image-gallery-sugar-cubes.jpg';
import './index.css';
import { useWindowSize } from './../../../custom-hooks/useWindowSize';

const Index = () => {
  const [width] = useWindowSize();

  const cone = width > 900 ? coneDesktop : coneMobile;
  const milkbottles = width > 900 ? milkbottlesDesktop : milkbottlesMobile;
  const orange = width > 900 ? orangeDesktop : orangeMobile;
  const sugarcubes = width > 900 ? sugarcubesDesktop : sugarcubesMobile;

  return (
    <div className="gallery">
      <div className="gallery-img-container">
        <img src={milkbottles} alt="milk bottles" />
      </div>
      <div className="gallery-img-container">
        <img src={orange} alt="orange" />
      </div>
      <div className="gallery-img-container">
        <img src={cone} alt={'cone'} />
      </div>
      <div className="gallery-img-container">
        <img src={sugarcubes} alt="sugar cubes" />
      </div>
    </div>
  );
};

export default Index;
