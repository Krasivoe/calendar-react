import styles from './ArrowButton.module.scss';

const ArrowButton = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={className ? [styles.btnArrow, className].join(' ') : styles.btnArrow}
    />
  );
};

export default ArrowButton;
