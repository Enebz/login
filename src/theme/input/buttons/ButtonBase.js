import React from 'react';

function ButtonBase(props) {
  return (
    <button 
      disabled={props.disabled} 
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      className={`${props.className} transition-all duration-200 ease-in-out outline-none focus:outline-none disabled:cursor-not-allowed`
    }>
      {props.children}
    </button>
  )
}

export default ButtonBase;
