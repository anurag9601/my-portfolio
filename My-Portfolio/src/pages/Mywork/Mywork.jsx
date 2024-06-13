import React, { useContext } from 'react'
import style from './Mywork.module.css'
import pen_icon from '../../assets/Images/pen.png'
import project_1 from '../../assets/Myworks/project-1.jpg'
import project_2 from '../../assets/Myworks/project-2.jpg'
import project_3 from '../../assets/Myworks/project-3.jpg'
import project_4 from '../../assets/Myworks/project-4.jpg'
import project_5 from '../../assets/Myworks/project-5.jpg'
import project_6 from '../../assets/Myworks/project-6.jpg'
import { ContextAPI } from '../../Context/ContextApi'

const Mywork = () => {

  let { setSidebarActive } = useContext(ContextAPI);
  
  return (
    <div className={style.workContainer} id='myWork' onClick={()=>setSidebarActive(false)}>
        <div className={style.workHead}>
            <h1>My Latest Work</h1>
            <img src={pen_icon} alt="" />
        </div>
        <div className={style.workImages}>
            <img src={project_1} alt="" />
            <img src={project_2} alt="" />
            <img src={project_3} alt="" />
            <img src={project_4} alt="" />
            <img src={project_5} alt="" />
            <img src={project_6} alt="" />
        </div>
        <button>Show More <i className="fa-solid fa-arrow-right-long"></i></button>
    </div>
  )
}

export default Mywork
