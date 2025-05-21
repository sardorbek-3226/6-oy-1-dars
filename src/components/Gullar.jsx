import React from 'react';
import style from './Gullar.module.css'

const Gullar = () => {
  return (
    <div>
        <div className={style.btn}>
            <h1>Featured Plants</h1>
            <button className={style.but}>Cheaper First <i class="fa-solid fa-chevron-down"></i></button>
            
        </div>
        <hr className={style.hr}/>
        <div className={style.man   }>
      <div >
       <img src="./kaktus.png" alt="Gul rasmi" className={style.img} />
      <p className={style.text}>Bu bizning eng chiroyli gullarimizdan biri.</p>
      </div>
      <div>
      <img src="./tikon.png" alt="Gul rasmi" className={style.img} />
      <div className={style.info}>
      <h3>Landak Plants</h3>
      <h3>IDR 85.000</h3>
      </div>
      <p className={style.text}>Bu bizning eng chiroyli gullarimizdan biri.</p>
      </div>
      <div>
      <img src="./miniArcha.png" alt="Gul rasmi" className={style.img} />
      <div className={style.info}>
      <h3>Landak Plants</h3>
      <h3>IDR 85.000</h3>
      </div>
      <p className={style.text}>Bu bizning eng chiroyli gullarimizdan biri.</p>
      </div>
      <div>
      <img src="./banangul.png" alt="Gul rasmi" className={style.img} />
      <div className={style.info}>
      <h3>Landak Plants</h3>
      <h3>IDR 85.000</h3>
      </div>
      <p className={style.text}>Bu bizning eng chiroyli gullarimizdan biri.</p>
      </div>
      <div>
      <img src="./tikon.png" alt="Gul rasmi" className={style.img} />
      <div className={style.info}>
      <h3>Landak Plants</h3>
      <h3>IDR 85.000</h3>
      </div>
      <p className={style.text}>Bu bizning eng chiroyli gullarimizdan biri.</p>
      </div>
    </div>
    </div>
  );
};

export default Gullar;
