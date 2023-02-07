import moment from 'moment/moment.js';
import { useMemo } from 'react';

export const useDay = (date, events) => {
  return useMemo(() => {
    const startDay = moment(date).startOf('month').startOf('week');
    const endDay = moment(date).endOf('month').endOf('week');
    const result = [];
    let count = 0;

    while (!startDay.isAfter(endDay)) {
      const day = {};

      if (count < 7) {
        document.documentElement.clientWidth > 768
          ? (day.day = [startDay.format('dddd'), startDay.format('D')].join(' '))
          : (day.day = [startDay.format('ddd'), startDay.format('D')].join(' '));
      } else {
        day.day = startDay.format('D');
      }
      count += 1;

      day.date = startDay.format('YYYY-MM-DD');

      const eventForDay = events.find(e => e.date === day.date);
      if (eventForDay) {
        day.event = eventForDay.event;
        day.people = eventForDay.people;
        day.description = eventForDay.description;
      }

      result.push(day);
      startDay.add(1, 'day');
    }

    return result;
  }, [date, events]);
};
