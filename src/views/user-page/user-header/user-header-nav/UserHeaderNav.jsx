import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../UserContext';
import MyPhotosSvg from '../../../../assets/feed.svg?react';
import AnalyticsSvg from '../../../../assets/estatisticas.svg?react';
import CreateNewPostSvg from '../../../../assets/adicionar.svg?react';
import LogoutSvg from '../../../../assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [isMobile, setIsMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyPhotosSvg />
        {isMobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/account/analytics">
        <AnalyticsSvg />
        {isMobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/account/new-post">
        <CreateNewPostSvg />
        {isMobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <LogoutSvg />
        {isMobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
