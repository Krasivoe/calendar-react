import styles from './MainButton.module.scss';

const MainButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={className ? [styles.btnMain, className].join(' ') : styles.btnMain}
    >
      {children}
    </button>
  );
};

export default MainButton;
