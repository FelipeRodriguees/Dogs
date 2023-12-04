import React from 'react';
import syles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={syles.header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
