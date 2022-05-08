import React from 'react';
import TransformStandout from './TransformStandout';
import GraphicDesignPhotography from './GraphicDesignPhotography';
import Testimonials from './testimonials';
import Gallery from './gallery';

const Main = () => {
  return (
    <main className="main">
      <TransformStandout />
      <GraphicDesignPhotography />
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Main;
