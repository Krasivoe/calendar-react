import styles from './Control.module.scss';
import stylesBtnArrow from '../UI/ButtonArrow/ArrowButton.module.scss';
import stylesBtnExtra from '../UI/ButtonExtra/ExtraButton.module.scss';
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
          className={[styles.btnPrev, stylesBtnArrow.btnArrow].join(' ')}
          onClick={() => setDate(moment(date).subtract(1, 'M'))}
        />
        <span className={styles.date}>{date.format('MMMM YYYY')}</span>
        <ArrowButton onClick={() => setDate(moment(date).add(1, 'M'))} />
      </div>
      <ExtraButton
        className={[stylesBtnExtra.btnExtra, styles.button].join(' ')}
        onClick={() => setDate(moment())}
      >
        Сегодня
      </ExtraButton>
    </div>
  );
};

export default Control;
