import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import IconComponent from "../../components/helper/IconComponent";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <IconComponent
            iconPath={"./assets/dogs.svg"}
            iconAlt={"Dogs - Ícone do site Dogs"}
          />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
