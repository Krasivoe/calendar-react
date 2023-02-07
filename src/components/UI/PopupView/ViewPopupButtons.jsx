import stylesInput from '../Input/Input.module.scss';
import ExtraButton from '../ButtonExtra/ExtraButton.jsx';
import { useContext, useEffect, useState } from 'react';
import { CalendarContext } from '../../../context/index.js';

const ViewPopupButtons = ({ setModalActive, events, setEvents }) => {
  const { clicked } = useContext(CalendarContext);
  const [areaValue, setAreaValue] = useState('');

  useEffect(() => {
    const event = events.find(e => e.date === clicked);
    event && setAreaValue(event?.description);
  }, [clicked, events]);

  const addDescription = () => {
    const newEvents = events.map(event => {
      if (event.date === clicked) event.description = areaValue;
      return event;
    });
    setEvents(newEvents);
    setModalActive(false);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  const deleteEvent = () => {
    const newEvents = events.filter(event => event.date !== clicked);
    setEvents(newEvents);
    setModalActive(false);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  return (
    <>
      <textarea
        className={[stylesInput.input, 'popup__desc'].join(' ')}
        placeholder="Описание"
        value={areaValue}
        onChange={event => setAreaValue(event.target.value)}
      />
      <div className="popup__buttons">
        <ExtraButton onClick={addDescription}>Готово</ExtraButton>
        <ExtraButton onClick={deleteEvent}>Удалить</ExtraButton>
      </div>
    </>
  );
};

export default ViewPopupButtons;
