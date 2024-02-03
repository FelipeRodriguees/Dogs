import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../UserContext";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../../../utils/hooks/useMedia";
import IconComponent from "../../../../components/helper/IconComponent";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [isHiddenMobileMenu, setIsHiddenMobileMenu] = useState(false);
  const isMobile = useMedia("(max-width: 40rem)");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsHiddenMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
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
          <IconComponent
            iconPath={"./assets/feed.svg"}
            iconAlt={"Dogs - Ícone de feed"}
          />
          {isMobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/account/analytics">
          <IconComponent
            iconPath={"./assets/estatisticas.svg"}
            iconAlt={"Dogs - Ícone de estatísticas"}
          />
          {isMobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/account/new-post">
          <IconComponent
            iconPath={"./assets/adicionar.svg"}
            iconAlt={"Dogs - Ícone de adicionar foto"}
          />
          {isMobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <IconComponent
            iconPath={"./assets/sair.svg"}
            iconAlt={"Dogs - Ícone de sair"}
          />
          {isMobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
