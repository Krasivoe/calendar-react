import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} className={props.className ? props.className : styles.input}/>
  );
});

Input.displayName = 'Input';
export default Input;
