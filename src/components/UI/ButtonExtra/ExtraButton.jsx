import styles from './ExtraButton.module.scss';

const ExtraButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={className ? className : styles.btnExtra}>
      {children}
    </button>
  );
};

export default ExtraButton;
