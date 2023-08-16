import React from 'react';
import Cv from  '../../assets/my-cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={Cv} download className='btn'>Download CV</a>
      <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
