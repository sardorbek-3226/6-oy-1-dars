import React from 'react';
import style from './Servic.modul.css';

const Servic = () => {
  return (
    <section className={style.section}>
      <div className={style.main}>
        <div className={style.about}>
          <img src="/moshin.svg" alt="svg" />
          <h3>Fast Delivery</h3>
        </div>
      </div>
    </section>
  );
};

export default Servic;
