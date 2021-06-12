import styles from './css/ErrorModal.module.css';
import Button from '../Button/Button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClick}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <section className={styles.content}>{props.message}</section>
          <footer className={styles.actions}>
            <Button title='Close' onClick={props.onClick}></Button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
