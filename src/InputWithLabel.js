import React, { Children } from 'react';
import styles from './InputWithLabel.module.css'



const InputWithLabel = ({onChange,value,children,isFocused}) => {

  const inputRef = React.useRef();

  React.useEffect(()=>{
    if(isFocused && inputRef.current){
      inputRef.current.focus();
    }
  },[isFocused]);

  return ( 
  
    <div className={styles.label}>
      <label htmlFor='todoTitle' >{children}</label>
      <input className={styles.input} ref={inputRef} id='todoTitle' name="title" onChange={onChange} value={value} autoFocus ></input>
   
    </div>
      
  );
}
 
export default InputWithLabel;