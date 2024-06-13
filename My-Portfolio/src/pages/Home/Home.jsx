import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import style from './Home.module.css'
import user_icon from '../../assets/Images/soccer-player.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ContextAPI } from '../../Context/ContextApi'

const Home = () => {

  let { setSidebarActive } = useContext(ContextAPI);
  return (
    <div className={style.homeContainer} id='home'>
    <Navbar/>
    <center onClick={()=>setSidebarActive(false)}>
    <div className={style.userImage}>
      <img src={user_icon} alt="" />
    </div>
    <h1><span>I'm Anurag Mishra,</span> frontend<br />developer based in India.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto natus necessitatibus soluta neque inventore dicta ut aperiam itaque molestiae.</p>
    <div className={style.homeButtons}>
      <button className={style.connectMebtn}><AnchorLink offset='50' href='#getInTouch'>Connect with me</AnchorLink></button>
      <button className={style.resumeBtn}>My resume</button>
    </div>
    </center>
    </div>
  )
}

export default Home
