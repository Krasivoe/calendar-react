import { createPopper } from '@popperjs/core';

export const setPopup = (day, popup, arrow) => {
  const topLogger = {
    name: 'topLogger',
    enabled: true,
    phase: 'main',
    fn({ state }) {
      // Корректное отображение стрелки
      if (state.placement === 'right-start') {
        arrow.classList = 'popup__arrow';
        arrow.classList.add('right-start');
      }
      if (state.placement === 'right-end') {
        arrow.classList = 'popup__arrow';
        arrow.classList.add('right-end');
      }
      if (state.placement === 'left-start') {
        arrow.classList = 'popup__arrow';
        arrow.classList.add('left-start');
      }
      if (state.placement === 'left-end') {
        arrow.classList = 'popup__arrow';
        arrow.classList.add('left-end');
      }
    }
  };

  createPopper(day, popup, {
    placement: 'right-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      },
      topLogger
    ]
  });
};
