import styles from './css/Button.module.css';

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
