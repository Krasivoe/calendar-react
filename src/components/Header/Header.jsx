import styles from './Header.module.scss';
import HeaderButtons from './HeaderButtons.jsx';
import HeaderSearch from './HeaderSearch.jsx';

const Header = ({ quickActive, setQuickActive, searchActive, setSearchActive }) => {
  return (
    <header className={styles.header}>
      <div className={[styles.container, 'container'].join(' ')}>
        <div className={styles.control}>
          <HeaderButtons quickActive={quickActive} setQuickActive={setQuickActive} />
          <HeaderSearch searchActive={searchActive} setSearchActive={setSearchActive} />
        </div>
      </div>
    </header>
  );
};

export default Header;
