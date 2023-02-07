import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={props.className ? [styles.input, props.className].join(' ') : styles.input}
    />
  );
});

Input.displayName = 'Input';
export default Input;
