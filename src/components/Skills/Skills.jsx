import React from 'react';
import './Skills.css';

const SkillData = [
  {
    Id: 1,
    Title: 'HTML5',
  },
  {
    Id: 2,
    Title: 'CSS',
  },
  {
    Id: 3,
    Title: 'JavaScript',
  },
  {
    Id: 4,
    Title: 'BootStrap',
  },
  {
    Id: 5,
    Title: 'reactjS',
  },
  {
    Id: 6,
    Title: 'Canva',
  },
  {
    Id: 7,
    Title: 'MySql',
  },
  {
    Id: 8,
    Title: 'C/C++',
  },
  {
    Id: 9,
    Title: 'DSA',
  },
  {
    Id: 10,
    Title: 'GitHub',
  },
];

const skills = () => {
  return (
    <section id="Skills">
      <h5>Have a look on My</h5>
      <h2 className="">Skills</h2>
      <div className="container portfolio__container">
        {SkillData.map((skill) => (
          <div className="work" key={skill.Id}>
            <div className="SkillName">{skill.Title}</div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default skills;
