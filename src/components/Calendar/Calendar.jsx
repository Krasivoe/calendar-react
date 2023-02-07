import styles from './Calendar.module.scss';
import stylesDay from '../UI/DayCell/Day.module.scss';
import Day from '../UI/DayCell/Day.jsx';
import { useContext, useEffect } from 'react';
import { useDay } from '../../hooks/useDay.js';
import { CalendarContext } from '../../context/index.js';

const Calendar = ({ eventRef, viewRef, modalActive, setModalActive }) => {
  const { days, setDays, events, date } = useContext(CalendarContext);
  const daysData = useDay(date, events);

  useEffect(() => {
    setDays(daysData);
  }, [days, setDays, date, daysData]);

  useEffect(() => {
    if (!modalActive) {
      const selectedDay = document.querySelector(`.${stylesDay.selected}`);
      selectedDay?.classList.remove(stylesDay.selected);
    }
  }, [modalActive]);

  return (
    <div className={styles.calendar}>
      {days.map(item => {
        if (item.event) {
          return (
            <Day
              key={item.date}
              isFill={true}
              eventData={item}
              eventRef={eventRef}
              viewRef={viewRef}
              setModalActive={setModalActive}
            >
              {item.day}
            </Day>
          );
        }
        return (
          <Day
            key={item.date}
            isFill={false}
            eventData={item}
            eventRef={eventRef}
            viewRef={viewRef}
            setModalActive={setModalActive}
          >
            {item.day}
          </Day>
        );
      })}
    </div>
  );
};

export default Calendar;
