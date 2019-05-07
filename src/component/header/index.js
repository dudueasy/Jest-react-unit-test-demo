import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = (props) => {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap" data-test="wrap">
        <div className="logo" data-test="logo">
          <img className="logoImg" data-test="logoIMG" src={Logo} alt="Logo"/>
        </div>
      </div>
    </header>
  );
};


export default Header;