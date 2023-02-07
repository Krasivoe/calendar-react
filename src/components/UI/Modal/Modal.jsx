import styles from './Modal.module.scss';

const Modal = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? [styles.modal, styles.open].join(' ') : styles.modal}
      onClick={() => setActive(false)}
    >
      {children}
    </div>
  );
};

export default Modal;
