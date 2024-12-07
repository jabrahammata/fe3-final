import React from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { WbSunnySharp, NightlightSharp,
} from "@mui/icons-material";
import { routes } from "../Components/utils/routes";
import styles from "../Styles/Navbar.module.css";
import { useContextGlobalStates } from "./utils/global.context";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const { state, dispatch } = useContextGlobalStates();

  const navbarStyle = useMemo(() => {
    return `${styles.navbar} ${
      state.theme === "dark" ? styles.dark : styles.light
    }`;
  }, [state.theme]);

  const toggleTheme = useMemo(() => {
    return () => {
      dispatch({ 
        type: "TOGGLE_THEME", 
        payload: state.theme === "dark" ? "" : "dark"  
      });
    };
  }, [state.theme, dispatch]);

  const ThemeIcon = useMemo(() => {
    return state.theme === "dark" ? (
      <WbSunnySharp className={styles.lightIcon} />
    ) : (
      <NightlightSharp className={styles.nightIcon} />
    );
  }, [state.theme]);

  return (
    <nav className={navbarStyle}>
      <Link to="/" className={styles.logoContainer}>
        <h1 className={styles.title}>
          <span className={styles.red}>DH</span> Clinica
        </h1>
      </Link>
      <div className={styles.rightSection}>
        <div className={styles.navLinks}>
          <Link to={routes.home}>Inicio</Link>
          <Link to={routes.contact}>Contacto</Link>
          <Link to={routes.favs}>Destacados</Link>
        </div>

        <IconButton onClick={toggleTheme}>
          {ThemeIcon}
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
