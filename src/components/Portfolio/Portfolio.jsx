import React from 'react';
import './Portfolio.css'
import LearnMore from './LearnMore'
import img1 from '../../assets/fastfoodcorner.jpg'
import img2 from '../../assets/work-1.png'

import img3 from '../../assets/work-2.png'

import img4 from '../../assets/work-3.png'

import img5 from '../../assets/work-2.png'

import img6 from '../../assets/fastfoodcorner.jpg'

const data=[
  {
    id:1,
    image:img1,
    title:"Fast Food Corner",
    github:'https://github.com',
  },
  {
    id:12,
    image:img2,
    title:"Fast Food Corner",
    github:'https://github.com',
  },
  {
    id:3,
    image:img3,
    title:"Fast Food Corner",
    github:'https://github.com',
  },
  {
    id:4,
    image:img4,
    title:"Fast Food Corner",
    github:'https://github.com',
  },
  {
    id:5,
    image:img5,
    title:"Fast Food Corner",
    github:'https://github.com',
  },
  {
    id:6,
    image:img6,
    title:"Fast Food Corner",
    github:'https://github.com',
  },
]

function Portfolio() {
  return (
    <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio
     </h2>
     <div className="container portfolio__container">
       {
data.map(({id,image,title,github})=>{
  return (
  
    <article key={id}className='portfolio__item'>
<div className="portfolio__item__img">
<img src={image} alt={title} />
</div>
<h3>{title}</h3>
      
<div className="portfolio__item_cta">
<a href={github}className='btn' target='_blank'>Github</a>
     </div>  
     </article>
    
  )
})

}<LearnMore/>
     </div>

    </section>
  );
}

export default Portfolio;
