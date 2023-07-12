import React, { Children } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';



const InputWithLabel = ({onChange,value,children,isFocused}) => {

  const inputRef = React.useRef();

  React.useEffect(()=>{
    if(isFocused && inputRef.current){
      inputRef.current.focus();
    }
  },[isFocused]);

  return ( 
    <>
      <label htmlFor='todoTitle' >{children}</label>
      <input ref={inputRef} id='todoTitle' name="title" onChange={onChange} value={value} autoFocus ></input>
    </> 
  );
}
 
export default InputWithLabel;