import React, { useContext } from 'react';
import logoCross from '../../../assets/images/popup/cross.svg';
import logoArrow from '../../../assets/images/popup/arrowLeft.svg';
import styles from './ViewPopup.module.scss';
import ViewPopupInfo from './ViewPopupInfo.jsx';
import ViewPopupButtons from './ViewPopupButtons.jsx';
import { CalendarContext } from '../../../context/index.js';

const ViewPopup = React.forwardRef((props, ref) => {
  const { events, setEvents } = useContext(CalendarContext);
  const { clicked } = useContext(CalendarContext);

  return (
    <div className={[styles.view, 'popup'].join(' ')} ref={ref} onClick={e => e.stopPropagation()}>
      <img className="popup__arrow" src={logoArrow} alt="arrow" />
      <div className="close">
        <div className="close__cross" onClick={() => props.setModalActive(false)}>
          <img className="popup__img" src={logoCross} alt="close" />
        </div>
      </div>
      <ViewPopupInfo clicked={clicked} events={events} />
      <ViewPopupButtons
        modalActive={props.modalActive}
        setModalActive={props.setModalActive}
        events={events}
        setEvents={setEvents}
        clicked={clicked}
      />
    </div>
  );
});

ViewPopup.displayName = 'ViewPopup';
export default ViewPopup;
