import styles from './Search.module.scss';
import SearchResult from './SearchResult.jsx';
import SearchInfoResult from './SearchInfoResult.jsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Search = ({ results, active, setActive, setDate }) => {
  return (
    <SimpleBar
      className={
        active
          ? [styles.search, styles.open, 'popup'].join(' ')
          : [styles.search, 'popup'].join(' ')
      }
      style={{ position: 'absolute' }}
      autoHide={false}
      id="searchScroll"
    >
      <div className={styles.inner}>
        <ul className={styles.area}>
          {results.length ? (
            results.map(res => (
              <SearchResult
                key={res.date}
                event={res.event}
                date={res.date}
                setActive={setActive}
                setDate={setDate}
              />
            ))
          ) : (
            <SearchInfoResult content={'Результаты отсутствуют...'} />
          )}
        </ul>
      </div>
    </SimpleBar>
  );
};

export default Search;
