import React, { useContext, useEffect, useState } from 'react';
import logoCross from '../../../assets/images/popup/cross.svg';
import logoArrow from '../../../assets/images/popup/arrowLeft.svg';
import styles from './EventPopup.module.scss';
import stylesInput from '../Input/Input.module.scss';
import EventPopupInputs from './EventPopupInputs.jsx';
import ExtraButton from '../ButtonExtra/ExtraButton.jsx';
import { CalendarContext } from '../../../context/index.js';

const EventPopup = React.forwardRef((props, ref) => {
  const { events, setEvents, clicked } = useContext(CalendarContext);
  const [eventValue, setEventValue] = useState('');
  const [peopleValue, setPeopleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [errorEvent, setErrorEvent] = useState(false);
  const [errorPeople, setErrorPeople] = useState(false);

  useEffect(() => {
    if (!props.modalActive) {
      clearEvent();
    }
  }, [props.modalActive]);

  const createEvent = () => {
    if (!(eventValue && peopleValue)) {
      setErrorEvent(true);
      setErrorPeople(true);
      return;
    }
    const eventData = {
      date: clicked,
      event: eventValue,
      people: peopleValue,
      description: descriptionValue
    };
    const updatedEvents = [...events, eventData];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));

    props.setModalActive(false);
  };

  const closeEvent = () => {
    clearEvent();
    props.setModalActive(false);
  };

  const clearEvent = () => {
    setEventValue('');
    setPeopleValue('');
    setDescriptionValue('');

    setErrorEvent(false);
    setErrorPeople(false);
  };

  return (
    <div className={[styles.event, 'popup'].join(' ')} ref={ref} onClick={e => e.stopPropagation()}>
      <img className="popup__arrow" src={logoArrow} alt="arrow" />

      <div className={styles.top}>
        <div className="close">
          <div className="close__cross" onClick={closeEvent}>
            <img className="popup__img" src={logoCross} alt="close" />
          </div>
        </div>
        <EventPopupInputs
          eventValue={eventValue}
          setEventValue={setEventValue}
          peopleValue={peopleValue}
          setPeopleValue={setPeopleValue}
          errorEvent={errorEvent}
          setErrorEvent={setErrorEvent}
          errorPeople={errorPeople}
          setErrorPeople={setErrorPeople}
        />
      </div>

      <div className={styles.bottom}>
        <textarea
          className={[stylesInput.input, 'popup__desc'].join(' ')}
          value={descriptionValue}
          onChange={e => setDescriptionValue(e.target.value)}
          placeholder="Описание"
        />
        <div className="popup__buttons">
          <ExtraButton onClick={createEvent}>Готово</ExtraButton>
          <ExtraButton onClick={clearEvent}>Удалить</ExtraButton>
        </div>
      </div>
    </div>
  );
});

EventPopup.displayName = 'EventPopup';
export default EventPopup;
