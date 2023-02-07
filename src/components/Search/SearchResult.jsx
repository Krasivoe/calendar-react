import styles from './Search.module.scss';
import moment from 'moment';

const SearchResult = ({ event, date, setActive, setDate }) => {
  const moveDate = () => {
    setDate(moment(date));
    setActive(false);
  };

  return (
    <li className={styles.result} onClick={moveDate}>
      <div className={styles.text}>
        <div className={styles.title}>{event}</div>
        <div className={styles.date}>{moment(date).format('LL')}</div>
      </div>
    </li>
  );
};

export default SearchResult;
