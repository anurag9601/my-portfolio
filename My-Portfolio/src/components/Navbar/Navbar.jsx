import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import app_logo from '../../assets/Images/app-logo.png'
import pen_img from '../../assets/Images/pen.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/Images/sidebar-icon.png'
import { ContextAPI } from '../../Context/ContextApi'

const Navbar = () => {

    let [pen , setPen] = useState('');

    let { setSidebarActive , sidebarActive } = useContext(ContextAPI)

  return (
    <div className={style.navContainer}>
      <div className={style.navMenuAndIcon}>
      <img src={menu_icon} alt="" className={style['sidebar-menu']} onClick={()=>{setSidebarActive((prev)=>(!prev))}}/>
      <img src={app_logo} alt="" />
      </div>
      <div className={`${style.sidebarMenu} ${sidebarActive === true && style.activeBar}`}>
        <ul>
          <li><AnchorLink href='#home'>Home</AnchorLink></li>
          <li><AnchorLink offset='100' href='#aboutMe'>About Me</AnchorLink></li>
          <li><AnchorLink offset='100' href='#myServices'>Service</AnchorLink></li>
          <li><AnchorLink offset='100' href='#myWork'>Portfolio</AnchorLink></li>
          <li><AnchorLink offset='100' href='#getInTouch'>Contact</AnchorLink></li>
        </ul>
      </div>
      <div className={style.navMenu}>
        <ul>
            <li onClick={()=>setPen('home')}><AnchorLink href='#home'>Home </AnchorLink>{pen === 'home'?<img src={pen_img} alt="" />:<></>}</li>
            <li onClick={()=>setPen('about-me')}><AnchorLink offset='50' href='#aboutMe'>About Me </AnchorLink>{pen === 'about-me'?<img src={pen_img} alt="" />:<></>}</li>
            <li onClick={()=>setPen('service')}><AnchorLink offset='50' href='#myServices'>Service </AnchorLink>{pen === 'service'?<img src={pen_img} alt="" />:<></>}</li>
            <li onClick={()=>setPen('portfolio')}><AnchorLink offset='50' href='#myWork'>Portfolio</AnchorLink>{pen === 'portfolio'?<img src={pen_img} alt="" />:<></>}</li>
            <li onClick={()=>setPen('contact')}><AnchorLink offset='50' href='#getInTouch'>Contact</AnchorLink>{pen === 'contact'?<img src={pen_img} alt="" />:<></>}</li>
        </ul>
      </div>
      <button><AnchorLink offset='50' href='#getInTouch'>Connect With Me</AnchorLink></button>
    </div>
  )
}

export default Navbar
