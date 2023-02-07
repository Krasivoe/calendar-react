import { months } from './getDateQuick.js';

export const updateMoment = moment => {
  moment.updateLocale('ru', {
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
    monthsShort: months,
    weekdays: [
      'Воскресенье,',
      'Понедельник,',
      'Вторник,',
      'Среда,',
      'Четверг,',
      'Пятница,',
      'Суббота,'
    ],
    weekdaysShort: ['Вс,', 'Пн,', 'Вт,', 'Ср,', 'Чт,', 'Пт,', 'Сб,'],
    longDateFormat: {
      LL: 'D MMM'
    },
    week: {
      dow: 1
    }
  });
  return moment;
};
