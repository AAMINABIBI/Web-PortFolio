import React from 'react';
import './AboutMe.css';
import I from '../../assets/I.jpg'

const AboutMe = () => {
    const handleImageHover = (e) => {
        e.target.classList.add('image-scale');
    };

    const handleImageLeave = (e) => {
        e.target.classList.remove('image-scale');
    };

    return (
        <section id='about' className="about-section">
            <div className="container">
                <div className="about-content">
                    <div
                        className="about-image"
                        onMouseOver={handleImageHover}
                        onMouseLeave={handleImageLeave}
                    >
                        <img src={I} alt="Your Name" />
                    </div>
                    <div className="about-description">
                        <h2>About Me</h2>
                        <p>
                        "Hello! I'm a computer science student with a
                        passion for web development.I love exploring 
                        the latest technologies and frameworks to build 
                        robust and efficient websites. With a solid 
                        background in programming languages such as 
                        Java, Python, and JavaScript, I enjoy creating
                        dynamic and interactive web applications 
                        that can scale to meet the demands of modern 
                        users. Whether it's working on front-end 
                        designs or optimizing server-side 
                        functionality, I'm dedicated to delivering
                        exceptional results that exceed expectations.
                        Let's work together to turn your vision 
                        into reality!"  

                        </p>
                       
                        <br></br>
                        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
