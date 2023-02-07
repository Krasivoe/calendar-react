import styles from './ViewPopup.module.scss';
import moment from 'moment/moment.js';
import { useContext } from 'react';
import { CalendarContext } from '../../../context/index.js';

const ViewPopupInfo = ({ events }) => {
  const { clicked } = useContext(CalendarContext);
  const event = events.find(e => e.date === clicked);

  return (
    <div className={styles.info}>
      <span className={styles.title}>{event?.event}</span>
      <span>{moment(event?.date).format('LL')}</span>
      <div className={styles.peoples}>
        <p className={styles.people}>Участники:</p>
        <p className={styles.list}>{event?.people}</p>
        <span
          className={
            event?.people.length > 41 ? [styles.tooltip, styles.visible].join(' ') : styles.tooltip
          }
        >
          {event?.people}
        </span>
      </div>
    </div>
  );
};

export default ViewPopupInfo;
