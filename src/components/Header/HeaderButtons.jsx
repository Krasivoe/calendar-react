import styles from './Header.module.scss';
import stylesBtn from '../UI/ButtonMain/MainButton.module.scss';
import MainButton from '../UI/ButtonMain/MainButton.jsx';
import QuickPopup from '../UI/PopupQuick/QuickPopup.jsx';
import { useContext } from 'react';
import { CalendarContext } from '../../context/index.js';

const HeaderButtons = ({ quickActive, setQuickActive }) => {
  const { setEvents } = useContext(CalendarContext);

  const updateEvents = () => {
    setEvents(JSON.parse(localStorage.getItem('events')));
  };

  const openQuickPopup = () => {
    setQuickActive(true);
  };

  return (
    <div className={styles.buttons}>
      <MainButton
        className={quickActive ? [styles.button, stylesBtn.active].join(' ') : styles.button}
        onClick={openQuickPopup}
      >
        Добавить
      </MainButton>
      <MainButton className={styles.button} onClick={updateEvents}>
        Обновить
      </MainButton>
      <QuickPopup active={quickActive} setActive={setQuickActive} />
    </div>
  );
};

export default HeaderButtons;
