import React, { useContext } from 'react'
import style from './Aboutme.module.css'
import pen_icon from  '../../assets/Images/pen.png'
import user_icon from '../../assets/Images/soccer-player.png'
import { ContextAPI } from '../../Context/ContextApi'

const Aboutme = () => {

    let { setSidebarActive } = useContext(ContextAPI);

  return (
    <div className={style.aboutContaine} id='aboutMe' onClick={()=>setSidebarActive(false)}>
        <div className={style.aboutHead}>
            <h1>About Me</h1>
            <img src={pen_icon} alt="" className={style['pen-icon']}/>
        </div>
        <div className={style.userInfo}>
        <div className={style.userImage}>
            <img src={user_icon} alt="" />
        </div>
        <div className={style.aboutUser}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio unde quo cum natus. Vitae quis, impedit deserunt eius id iure ut quas quibusdam ipsum a rem maiores, commodi cumque accusamus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit explicabo perspiciatis sapiente saepe quam!</p>
            <div className={style.skillBar}>
                <div className={style['skills']}>
                    <p>HTML</p>
                    <div className={style.hrhtml}>
                    <hr />
                    </div>
                </div>
                <div className={style['skills']}>
                    <p>CSS</p>
                    <div className={style.hrcss}>
                    <hr />
                    </div>
                </div>
                <div className={style['skills']}>
                    <p>Javascript</p>
                    <div className={style.hrjs}>
                    <hr />
                    </div>
                </div>
                <div className={style['skills']}>
                    <p>React JS</p>
                    <div className={style.hrreactjs}>
                    <hr />
                    </div>
                </div>
                <div className={style['skills']}>
                    <p>Python</p>
                    <div className={style.hrpython}>
                    <hr />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className={style.aboutAchivements}>
            <div className={style.aboutAchivement}>
                <h1>Currently no industry</h1>
                <p>EXPERIENCE</p>
            </div>
            <hr />
            <div className={style.aboutAchivement}>
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className={style.aboutAchivement}>
                <h1>Currently no Client history</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutme
