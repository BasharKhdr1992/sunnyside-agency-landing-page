import React from 'react';
import './Testimonial.css';

const Testimonial = ({ avatar, testimonial, name, jobTitle }) => {
  return (
    <div className="testimonial">
      <img src={avatar} alt={`${name}, ${jobTitle}`} />
      <p className="testimonial-text">{testimonial}</p>
      <h2>{name}</h2>
      <p className="job-title">{jobTitle}</p>
    </div>
  );
};

export default Testimonial;
