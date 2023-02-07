import stylesInput from '../Input/Input.module.scss';
import stylesBtn from '../ButtonExtra/ExtraButton.module.scss';
import ExtraButton from '../ButtonExtra/ExtraButton.jsx';
import { useEffect, useState } from 'react';

const ViewPopupButtons = ({ setModalActive, events, setEvents, clicked }) => {
  const [areaValue, setAreaValue] = useState('');

  useEffect(() => {
    const event = events.find(e => e.date === clicked);
    setAreaValue(event?.description);
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
        <ExtraButton
          className={[stylesBtn.btnExtra, 'popup__button'].join(' ')}
          onClick={addDescription}
        >
          Готово
        </ExtraButton>
        <ExtraButton
          className={[stylesBtn.btnExtra, 'popup__button'].join(' ')}
          onClick={deleteEvent}
        >
          Удалить
        </ExtraButton>
      </div>
    </>
  );
};

export default ViewPopupButtons;
