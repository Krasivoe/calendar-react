import logoCross from '../../../assets/images/popup/cross.svg';
import styles from './QuickPopup.module.scss';
import stylesInput from '../Input/Input.module.scss';
import moment from 'moment';
import { useContext, useEffect, useRef, useState } from 'react';
import { getDateQuick } from '../../../utils/getDateQuick.js';
import Input from '../Input/Input.jsx';
import ExtraButton from '../ButtonExtra/ExtraButton.jsx';
import { CalendarContext } from '../../../context/index.js';
import { useOutsideClick } from '../../../hooks/useOutsideClick.js';

const QuickPopup = ({ active, setActive }) => {
  const quickRef = useRef(null);
  const { events } = useContext(CalendarContext);
  const [value, setValue] = useState('');
  const [error, setError] = useState({
    isError: false,
    placeholder: '16 октября, Кутеж, Олег'
  });

  useOutsideClick(quickRef, setActive, active);

  useEffect(() => {
    if (!active) {
      setValue('');
      setError({ isError: false, placeholder: '16 октября, Кутеж, Олег' });
    }
  }, [active]);

  const createEvent = () => {
    const inputValue = value.trim().split(', ');

    if (!value || inputValue.length < 3) {
      setValue('');
      setError({ isError: true, placeholder: 'Укажите событие через 2 разделителя' });
      return;
    }

    const date = getDateQuick(inputValue[0]);
    const event = inputValue[1];
    const people = inputValue.slice(2, inputValue.length).join(', ');

    if (!moment(date).isValid()) {
      setValue('');
      setError({ isError: true, placeholder: 'Некорректная дата' });
      return;
    }

    if (events.find(ev => ev.date === date)) {
      // Перезапись события
      const newEvents = events.map(item => {
        if (item.date === moment(date).format('YYYY-MM-DD')) {
          item.event = event;
          item.people = people;
        }
        return item;
      });
      localStorage.setItem('events', JSON.stringify(newEvents));
    } else {
      const newEvents = [
        ...events,
        {
          date: moment(date).format('YYYY-MM-DD'),
          event,
          people,
          description: ''
        }
      ];
      localStorage.setItem('events', JSON.stringify(newEvents));
    }

    setActive(false);
  };

  return (
    <div
      className={
        active ? [styles.quick, styles.open, 'popup'].join(' ') : [styles.quick, 'popup'].join(' ')
      }
      ref={quickRef}
      onClick={e => e.stopPropagation()}
    >
      <div className="close">
        <div className="close__cross" onClick={() => setActive(false)}>
          <img className={styles.img} src={logoCross} alt="close" />
        </div>
      </div>
      <Input
        className={error.isError ? [styles.input, stylesInput.error].join(' ') : styles.input}
        value={value}
        onChange={e => setValue(e.target.value)}
        onClick={() => setError({ isError: false, placeholder: '16 октября, Кутеж, Олег' })}
        type="text"
        placeholder={error.placeholder}
        autoComplete="off"
      />
      <div className={styles.buttons}>
        <ExtraButton onClick={createEvent}>Создать</ExtraButton>
      </div>
    </div>
  );
};

export default QuickPopup;
