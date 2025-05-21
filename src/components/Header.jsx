import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.hero}>
        <img className={style.img} src="/hero.png" alt="foto" />
      </div>
      <div className={style.title}>
        <h1>Kembang <br /> Flower Mantap</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed nam rem quos pariatur architecto corrupti enim, earum cum temporibus excepturi quia perspiciatis est similique alias consequatur a quas impedit!</p>
        <div className={style.next}>
          <div className={style.left}>
            <i className="fa-solid fa-arrow-left"></i>Previous
            <h4>Rahasia Plant</h4>
          </div>
          <div className={style.right}>
            Next <i className="fa-solid fa-arrow-right"></i>
            <h4>Kaktus Plant</h4>
          </div>
        </div>
      </div> 
    </header>
  );
};

export default Header;
