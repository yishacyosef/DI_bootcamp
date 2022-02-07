import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return<div className='header'>
      <div className="header__left"></div>
        <img src="../icons/icons8-facebook.svg" alt="logo"/>
        <div className="header__input"></div>
        <SearchIcon/>
      <div className="header__middle"></div>
      <div className="header__right"></div>
  </div>
}

export default Header;
