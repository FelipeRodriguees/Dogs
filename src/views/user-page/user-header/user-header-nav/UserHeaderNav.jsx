import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../UserContext';
import MyPhotosSvg from '../../../../assets/feed.svg?react';
import AnalyticsSvg from '../../../../assets/estatisticas.svg?react';
import CreateNewPostSvg from '../../../../assets/adicionar.svg?react';
import LogoutSvg from '../../../../assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../../../utils/hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [isHiddenMobileMenu, setIsHiddenMobileMenu] = useState(false);
  const isMobile = useMedia('(max-width: 40rem)');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsHiddenMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          className={`${styles.toggleMobileMenuButton} ${
            isHiddenMobileMenu && styles.toggleMobileMenuButtonActive
          }`}
          onClick={() => setIsHiddenMobileMenu(!isHiddenMobileMenu)}
        ></button>
      )}

      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          isHiddenMobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
