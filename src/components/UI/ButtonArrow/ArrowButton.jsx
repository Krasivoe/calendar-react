import styles from './ArrowButton.module.scss';

const ArrowButton = ({ className, ...props }) => {
  return <button {...props} className={className ? className : styles.btnArrow}></button>;
};

export default ArrowButton;
