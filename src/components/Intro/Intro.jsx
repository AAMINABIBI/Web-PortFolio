import React from 'react';
import CTA from './CTA';
import './Intro.css'
import ME from '../../assets/IMG_20230808_144352_803.jpg'
import HeaderSocial from './HeaderSocial';
import Logo from './Logo'

function Intro() {
  return (
  
<header>
  <Logo/>
   <div className="container header__container">
<h5>Hello I'm</h5>
<h1>Aamina Bibi</h1>
<h5 className='text-light'>MERNStack developer</h5>
<CTA/>
<HeaderSocial/>

<div className="me">
  <img src={ME} alt="me" />
</div>
<a href="#contacts" className='scroll__down' >Scroll Down</a>

  </div>
</header>

  );
}

export default Intro;
