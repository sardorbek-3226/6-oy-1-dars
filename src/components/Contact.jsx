import React from 'react'
import style from './Contact.module.css'
const contact = () => {
  return (
    <section className={`${style.section} container`}>
        <div className={style.about}>
            <h1>Get your favourites plant on our shop now</h1>
            <button className={style.btn1}>Visit Shop</button>
        </div>
        <div>
            <img src="/oxiri.png" alt="foto" />
        </div>
    </section>
  )
}

export default contact
