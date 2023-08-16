import React from 'react';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/aamina-bibi-a5ba3a245/" target="_blank"> <FaLinkedin /> </a>
      <a href="https://github.com/AAMINABIBI" target="_blank"> <FaGithub/></a>
      <a href="https://www.instagram.com/amna_writes56/" target="_blank"> <FaInstagram/> </a>
    </div>
  );
}

export default HeaderSocial;
