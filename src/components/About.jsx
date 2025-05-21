import React from 'react'
import style from './About.module.css'
const About = () => {
  return (
    <section className={`${style.section} container`}>
        <div className={style.about}>
        <div className={style.title}>
        <h2>Buy more plants, it helps you to be relaxed </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</p>
        </div>
        <div className={style.img}>
            <img src="/chaptaraf.png" alt="foto" />
        </div>
        </div>
        <div>
    <img src="ongtaraf.png" alt="foto" />
        </div>
    </section>
  )
}

export default About
