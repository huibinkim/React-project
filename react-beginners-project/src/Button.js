import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button; //내보내기? 같이 생각하는 중
//create-react-app 배우는 멋진 점은 분할하는 거?
