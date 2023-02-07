import styles from './EventPopup.module.scss';
import stylesInput from '../Input/Input.module.scss';
import Input from '../Input/Input.jsx';
import moment from 'moment';
import { useContext } from 'react';
import { CalendarContext } from '../../../context/index.js';

const EventPopupInputs = props => {
  const { clicked } = useContext(CalendarContext);
  return (
    <div className={styles.inputs}>
      <Input
        className={props.errorEvent ? [styles.input, stylesInput.error].join(' ') : styles.input}
        value={props.eventValue}
        onChange={e => props.setEventValue(e.target.value)}
        onClick={() => props.setErrorEvent(false)}
        type="text"
        placeholder="Событие"
        autoComplete="off"
      />
      <Input
        className={[styles.input, stylesInput.input].join(' ')}
        value={moment(clicked).format('DD, MM, YYYY')}
        type="text"
        placeholder="День, месяц, год"
        autoComplete="off"
        disabled
      />
      <Input
        className={
          props.errorPeople
            ? [styles.input, stylesInput.input, stylesInput.error].join(' ')
            : [styles.input, stylesInput.input].join(' ')
        }
        value={props.peopleValue}
        onChange={e => props.setPeopleValue(e.target.value)}
        onClick={() => props.setErrorPeople(false)}
        type="text"
        placeholder="Имена участников"
        autoComplete="off"
      />
    </div>
  );
};

export default EventPopupInputs;
