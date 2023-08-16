import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'



const Contacts = () => {
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className='conta'>
<div className="container contacct__container">
<div className="contact__options">
<article className='contact__option'>
  <AiOutlineMail className='contact__option-icon'/>
<h4>Email</h4>
<h5>aaminabibi2324@gmail.com</h5>
<a href="mailto:aaminabibi2324@gmail.com" target='_blank'>
  Send a message
</a>
</article>

<article className='contact__option'>
  <BsInstagram className='contact__option-icon'/>
<h4>Instagram</h4>
<h5>Amina Bibi</h5>
<a href="https://formspree.io/f/mwkdlaaa" target='_blank'>
  Send a message
</a>
</article>

<article className='contact__option'>
  <BsWhatsapp className='contact__option-icon'/>
<h4>Whatsapp</h4>
<h5>+923348933942</h5>
<a href="https://formspree.io/f/mwkdlaaa" target='_blank'>
  Send a message
</a>
</article>
</div>
</div>

<form action="https://formspree.io/f/mwkdlaaa" method="POST" >

  <input type="text"name='name'placeholder='Your Full Neme' required/>
  <input type="email" name='email' placeholder='Your Email' required/>
  <textarea name="message" placeholder='Your Message....' rows="10" required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
</form>
</div>
    </section>
  );
}

export default Contacts;
