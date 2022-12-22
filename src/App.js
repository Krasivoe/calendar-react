import './styles/App.scss';
import moment from 'moment/moment.js';
import { useRef, useState } from 'react';
import { updateMoment } from './utils/updateMoment.js';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Modal from './components/UI/Modal/Modal.jsx';
import EventPopup from './components/UI/PopupEvent/EventPopup.jsx';
import ViewPopup from './components/UI/PopupView/ViewPopup.jsx';
import { CalendarContext } from './context/index.js';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [quickActive, setQuickActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const eventRef = useRef(null);
  const viewRef = useRef(null);
  const [clicked, setClicked] = useState('');
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
  );
  const [date, setDate] = useState(updateMoment(moment));
  const [days, setDays] = useState([]);

  return (
    <CalendarContext.Provider
      value={{
        events,
        setEvents,
        date,
        setDate,
        days,
        setDays,
        clicked,
        setClicked
      }}
    >
      <div className="wrapper">
        <Header
          quickActive={quickActive}
          setQuickActive={setQuickActive}
          searchActive={searchActive}
          setSearchActive={setSearchActive}
        />

        <Main
          eventRef={eventRef}
          viewRef={viewRef}
          modalActive={modalActive}
          setModalActive={setModalActive}
        />

        <Modal active={modalActive} setActive={setModalActive}>
          <EventPopup ref={eventRef} modalActive={modalActive} setModalActive={setModalActive} />
          <ViewPopup ref={viewRef} setModalActive={setModalActive} />
        </Modal>
      </div>
    </CalendarContext.Provider>
  );
}

export default App;
