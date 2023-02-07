import styles from './Control.module.scss';
import ArrowButton from '../UI/ButtonArrow/ArrowButton.jsx';
import ExtraButton from '../UI/ButtonExtra/ExtraButton.jsx';
import moment from 'moment';
import { useContext } from 'react';
import { CalendarContext } from '../../context/index.js';

const Control = () => {
  const { date, setDate } = useContext(CalendarContext);

  return (
    <div className={styles.control}>
      <div className={styles.month}>
        <ArrowButton
          className={styles.btnPrev}
          onClick={() => setDate(moment(date).subtract(1, 'M'))}
        />
        <span className={styles.date}>{date.format('MMMM YYYY')}</span>
        <ArrowButton onClick={() => setDate(moment(date).add(1, 'M'))} />
      </div>
      <ExtraButton className={styles.button} onClick={() => setDate(moment())}>
        Сегодня
      </ExtraButton>
    </div>
  );
};

export default Control;
