import React from 'react';
import './index.css';
import Testimonial from './Testimonial';
import emily from '../../../images/image-emily.jpg';
import jennie from '../../../images/image-jennie.jpg';
import thomas from '../../../images/image-thomas.jpg';

const Index = () => {
  return (
    <div className="testimonials">
      <h1 className="testimonials-h">Client testimonials</h1>
      <div className="testimonials-grid">
        <Testimonial
          avatar={emily}
          name={'Emily R.'}
          jobTitle={'Marketing Director'}
          testimonial={
            'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
          }
        />
        <Testimonial
          avatar={thomas}
          name={'Thomas S.'}
          jobTitle={'Chief Operating Officer'}
          testimonial={
            'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
          }
        />
        <Testimonial
          avatar={jennie}
          name={'Jennie F.'}
          jobTitle={'Business Owner'}
          testimonial={
            'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
          }
        />
      </div>
    </div>
  );
};

export default Index;
