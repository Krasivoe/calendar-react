import styles from './Search.module.scss';

const SearchInfoResult = ({ children }) => {
  return (
    <li className={styles.info}>
      <div>{children}</div>
    </li>
  );
};

export default SearchInfoResult;
