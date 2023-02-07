import styles from './EventPopup.module.scss';
import stylesInput from '../Input/Input.module.scss';
import Input from '../Input/Input.jsx';
import moment from 'moment';

const EventPopupInputs = ({
  date,
  eventValue,
  setEventValue,
  peopleValue,
  setPeopleValue,
  errorEvent,
  setErrorEvent,
  errorPeople,
  setErrorPeople
}) => {
  return (
    <div className={styles.inputs}>
      <Input
        className={
          errorEvent
            ? [styles.input, stylesInput.input, stylesInput.error].join(' ')
            : [styles.input, stylesInput.input].join(' ')
        }
        value={eventValue}
        onChange={e => setEventValue(e.target.value)}
        onClick={() => setErrorEvent(false)}
        type="text"
        placeholder="Событие"
        autoComplete="off"
      />
      <Input
        className={[styles.input, stylesInput.input].join(' ')}
        value={moment(date).format('DD, MM, YYYY')}
        type="text"
        placeholder="День, месяц, год"
        autoComplete="off"
        disabled
      />
      <Input
        className={
          errorPeople
            ? [styles.input, stylesInput.input, stylesInput.error].join(' ')
            : [styles.input, stylesInput.input].join(' ')
        }
        value={peopleValue}
        onChange={e => setPeopleValue(e.target.value)}
        onClick={() => setErrorPeople(false)}
        type="text"
        placeholder="Имена участников"
        autoComplete="off"
      />
    </div>
  );
};

export default EventPopupInputs;
