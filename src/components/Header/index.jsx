import wallpaper from "../../assets/wallpaperIMC.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.containerImage}>
        <img
          src={wallpaper}
          alt="Imagem de IMC"
          className={styles.imageHeader}
        />
      </div>
      <div>
        <h1 className={styles.h1}>Calculadora de IMC</h1>
      </div>
    </div>
  );
};

export default Header;
