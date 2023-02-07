import styles from './Day.module.scss';
import stylesEvent from '../PopupEvent/EventPopup.module.scss';
import stylesView from '../PopupView/ViewPopup.module.scss';
import { setPopup } from '../../../utils/setPopup.js';
import { useContext } from 'react';
import { CalendarContext } from '../../../context/index.js';

const Day = ({ children, isFill, eventData, eventRef, viewRef, setModalActive }) => {
  const { setClicked } = useContext(CalendarContext);

  const showPopup = day => {
    day.target.classList.add(styles.selected);
    eventRef.current.classList.remove(stylesEvent.open);
    viewRef.current.classList.remove(stylesView.open);

    setClicked(eventData.date);

    if (!isFill) {
      if (document.documentElement.clientWidth > 768) {
        // Иначе мобильная версия
        setPopup(day.currentTarget, eventRef.current, eventRef.current.firstChild);
      }
      eventRef.current.classList.add(stylesEvent.open);
    } else {
      if (document.documentElement.clientWidth > 768) {
        // Иначе мобильная версия
        setPopup(day.currentTarget, viewRef.current, viewRef.current.firstChild);
      }
      viewRef.current.classList.add(stylesView.open);
    }

    setModalActive(true);
  };

  return (
    <div className={isFill ? [styles.day, styles.fill].join(' ') : styles.day} onClick={showPopup}>
      {children}
      {isFill ? (
        <>
          <div className={styles.title}>{eventData.event}</div>
          <div className={styles.people}>{eventData.people}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Day;
