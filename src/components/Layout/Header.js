import image from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Yummy</h1>
        <HeaderButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A table full of food!" />
      </div>
    </>
  );
};

export default Header;
