import styles from './Search.module.scss';

const SearchInfoResult = ({ content }) => {
  return (
    <li className={styles.info}>
      <div>{content}</div>
    </li>
  );
};

export default SearchInfoResult;
