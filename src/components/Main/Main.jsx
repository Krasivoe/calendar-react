import styles from './Main.module.scss';
import Control from '../CalendarControl/Control.jsx';
import Calendar from '../Calendar/Calendar.jsx';

const Main = ({ eventRef, viewRef, modalActive, setModalActive }) => {
  return (
    <main className="container">
      <section className={styles.content}>
        <Control />
        <Calendar
          eventRef={eventRef}
          viewRef={viewRef}
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
      </section>
    </main>
  );
};

export default Main;
