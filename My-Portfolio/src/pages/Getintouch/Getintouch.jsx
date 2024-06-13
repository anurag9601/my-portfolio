import React, { useContext, useRef } from 'react'
import style from './Getintouch.module.css'
import pen_icon from '../../assets/Images/pen.png'
import { ContextAPI } from '../../Context/ContextApi'

const Getintouch = () => {

  let { setSidebarActive } = useContext(ContextAPI);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "282431ef-b4e7-411d-b416-3e279d06cf3b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Your response is sended.");
          nameRef.current.value = '';
          emailRef.current.value = '';
          messageRef.current.value = '';
        }
      };

      let nameRef = useRef('');
      let emailRef = useRef('');
      let messageRef = useRef('');
      
  return (
    <div className={style.getintouchContainer} id='getInTouch' onClick={()=>setSidebarActive(false)}>
      <div className={style.getintouchHead}>
      <h1>Get in touch</h1>
      <img src={pen_icon} alt="" />
      </div>
      <div className={style.responseContainer}>
        <div className={style.contacts}>
            <h2>Let's talk</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, consectetur. Maxime culpa maiores facere. Temporibus modi non assumenda sapiente expedita?</p>
            <div className={style.contactinfo}>
                <i className="fa-solid fa-envelope"></i> 
                <p>anuragmishrap13@gmail.com</p>
            </div>
            <div className={style.contactinfo}>
                <i className="fa-solid fa-phone-volume"></i>
                <p>+918657277928</p>
            </div>
            <div className={style.contactinfo}>
                <i className="fa-solid fa-location-dot"></i>
                <p>Ghatkopar, Mumbai , Maharastra</p>
            </div>
        </div>
        <form onSubmit={onSubmit} className={style.inputContainer}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' ref={nameRef} required/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' ref={emailRef} required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" placeholder='Enter your message' ref={messageRef} required></textarea>
            <button type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Getintouch
