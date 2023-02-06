import { Link } from "react-router-dom";
import styles from "./footer.module.css";

import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footerLink} to="/pokemons">
        <img className={styles.footerIcon} src={PokemonPic} alt="Pokemon" />
        Pokemons
      </Link>
      <Link className={styles.footerLink} to="https://github.com/DavidDaganzo">
        <img className={styles.footerIcon} src={ItemsPic} alt="Item" />
        Github
      </Link>
      <Link className={styles.footerLink} to="https://www.linkedin.com/in/david-daganzo-fraile">
        <img className={styles.footerIcon} src={LocationPic} alt="Location" />
        LinkedIn
      </Link>
    </footer>
  );
};

export default Footer;
