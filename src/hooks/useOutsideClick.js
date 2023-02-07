import { useEffect } from 'react';

export const useOutsideClick = (elementRef, handler, attached = true) => {
  useEffect(() => {
    if (!attached) return;

    const handleClick = e => {
      if (!elementRef.current) return;
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        handler(false);
      }
    };

    document.addEventListener('mouseup', handleClick);

    return () => {
      document.removeEventListener('mouseup', handleClick);
    };
  }, [elementRef, handler, attached]);
};
