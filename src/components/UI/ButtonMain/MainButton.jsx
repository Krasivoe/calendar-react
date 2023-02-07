import styles from './MainButton.module.scss';

const MainButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={className ? className : styles.btnMain}>
      {children}
    </button>
  );
};

export default MainButton;
