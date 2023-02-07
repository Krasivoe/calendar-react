import searchLogo from '../../assets/images/elements/search.svg';
import styles from './Header.module.scss';
import stylesInput from '../UI/Input/Input.module.scss';
import Input from '../UI/Input/Input.jsx';
import Search from '../Search/Search.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { useSearchResults } from '../../hooks/useSearchResults.js';
import { CalendarContext } from '../../context/index.js';
import moment from 'moment';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';

const HeaderSearch = ({ searchActive, setSearchActive }) => {
  const { events, setDate } = useContext(CalendarContext);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const [filter, setFilter] = useState('');
  const [results, setResults] = useState([]);
  const resultsData = useSearchResults(events, filter);

  useOutsideClick(searchRef, setSearchActive, searchActive);

  useEffect(() => {
    if (searchActive) {
      setResults(resultsData);
    } else {
      setFilter('');
    }
  }, [searchActive, resultsData]);

  const crossHandler = () => {
    setFilter('');
    if (inputRef.current) inputRef.current.focus();
  };

  const setFirstSearchResult = () => {
    const result = results[0];
    if (searchActive) {
      if (result) {
        setDate(moment(result.date));
        setSearchActive(false);
        setFilter('');
      } else {
        crossHandler();
      }
    }
  };

  return (
    <div className={styles.search} ref={searchRef}>
      <img className={styles.img} src={searchLogo} alt="Поиск" onClick={setFirstSearchResult} />
      <div className={styles.inputArea}>
        <Input
          className={searchActive ? [styles.input, stylesInput.focus].join(' ') : styles.input}
          ref={inputRef}
          value={filter}
          onChange={e => setFilter(e.target.value)}
          onClick={() => setSearchActive(true)}
          type="text"
          placeholder="Начните вводить"
        />
        <span
          className={
            searchActive ? [stylesInput.cross, stylesInput.visible].join(' ') : stylesInput.cross
          }
          onClick={crossHandler}
        ></span>
      </div>
      <Search
        results={results}
        active={searchActive}
        setActive={setSearchActive}
        setDate={setDate}
      />
    </div>
  );
};

export default HeaderSearch;
