import React, { useContext } from 'react'
import style from './Myservices.module.css'
import pen_icon from '../../assets/Images/pen.png'
import { ContextAPI } from '../../Context/ContextApi'

const Myservices = () => {

    let { setSidebarActive } = useContext(ContextAPI);
    
  return (
    <div className={style.servicesContainer} id='myServices' onClick={()=>setSidebarActive(false)}>
      <div className={style.serviceHead}>
      <h1>My Services</h1>
      <img src={pen_icon} alt="" />
      </div>
      <div className={style.servicesBoxes}>
        <div className={style.smallServiceBox}>
            <span>01</span>
            <h3>Web design</h3>
            <p className={style.smallText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, exercitationem?</p>
            <div className={style.readMoreBox}>
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <div className={style.smallServiceBox}>
            <span>02</span>
            <h3>Graphics design</h3>
            <p className={style.smallText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, exercitationem?</p>
            <div className={style.readMoreBox}>
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <div className={style.smallServiceBox}>
            <span>03</span>
            <h3>Social media</h3>
            <p className={style.smallText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, exercitationem?</p>
            <div className={style.readMoreBox}>
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <div className={style.smallServiceBox}>
            <span>04</span>
            <h3>App design</h3>
            <p className={style.smallText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, exercitationem?</p>
            <div className={style.readMoreBox}>
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <div className={style.smallServiceBox}>
            <span>05</span>
            <h3>Degital marketing</h3>
            <p className={style.smallText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, exercitationem?</p>
            <div className={style.readMoreBox}>
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <div className={style.smallServiceBox}>
            <span>06</span>
            <h3>Content writing</h3>
            <p className={style.smallText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, exercitationem?</p>
            <div className={style.readMoreBox}>
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Myservices
