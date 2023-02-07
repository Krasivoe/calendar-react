import styles from './ExtraButton.module.scss';

const ExtraButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={className ? [styles.btnExtra, className].join(' ') : styles.btnExtra}
    >
      {children}
    </button>
  );
};

export default ExtraButton;
