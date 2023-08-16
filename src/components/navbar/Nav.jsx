import React from 'react';
import './navbar.css'
import  {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {MdOutlineDesignServices} from 'react-icons/md'
 import {AiTwotonePhone} from 'react-icons/ai'
 import {MdReviews} from 'react-icons/md'
import { useState } from 'react';

function Nav() {
let [activeNav,setactiveNav]=useState('#')

  return (
   <nav>
<a href="#" onClick={()=>setactiveNav('#')}
className={activeNav==='#'?'active':""}><FaHome/></a>
<a href="#about"onClick={()=>setactiveNav('#about')} 
className={activeNav==='#about'?'active':""}
><BiUserCircle/></a>
<a href="#Skills"onClick={()=>setactiveNav('#Skills')} 
className={activeNav==='#Skills'?'active':""}><GiSkills/></a>
<a href="#portfolio"onClick={()=>setactiveNav('#portfolio')} 
className={activeNav==='#portfolio'?'active':""}><MdOutlineDesignServices/></a>
<a href="#contact"onClick={()=>setactiveNav('#contact')} 
className={activeNav==='#contact'?'active':""}><AiTwotonePhone/></a>


   </nav>
  );
}

export default Nav;
