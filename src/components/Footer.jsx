// src/components/Footer.jsx
import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
   <footer >
    <div className={style.about}>
      <h3>plantku</h3>
      <p>Plantku House</p>
      <p>Jl. Laksda </p>
    </div>
    <div className={style.about}>
      <h3>Perusahaan</h3>
      <p>Tentang Kami</p>
      <p>Hubungi Kami</p>
    </div>
    <div className={style.about}>
      <h3>Produk</h3>
      <p>Tenaman</p>
      <p>tanaman Lain</p>
    </div>
    <div className={style.about}>
      <h3>Berlangganan Email Kami</h3>
      <input placeholder='Masukan Alamat Email' type="email" />
      <button className={style.btn1}>Submit</button>
    </div>
     <hr />
   </footer>
  ); 
};

export default Footer;


