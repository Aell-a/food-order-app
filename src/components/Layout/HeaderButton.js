import styles from "./HeaderButton.module.css";
import CartIcon from "./CartIcon";

const HeaderButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderButton;
