import moment from 'moment';
import { useMemo } from 'react';

export const useSearchResults = (events, filter) => {
  return useMemo(() => {
    const results = [];
    events.forEach(item => {
      const data = {
        event: item.event,
        date: item.date,
        queryDate: moment(item.date).format('LL')
      };
      results.push(data);
    });

    results.sort((a, b) => new Date(a.date) - new Date(b.date));

    if (filter) {
      return results.filter(
        res =>
          res.event.toLowerCase().includes(filter.toLowerCase()) ||
          res.queryDate.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return results;
  }, [events, filter]);
};
