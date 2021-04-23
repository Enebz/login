import React from 'react';

function ButtonBase(props) {
  return (
    <div className={`${props.className}`}>
      <button 
        disabled={props.disabled} 
        onClick={props.onClick}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        className={`${props.innerClassName} transition-all duration-200 ease-in-out outline-none focus:outline-none disabled:cursor-not-allowed`}
      >
        {props.children}
      </button>
    </div>
    
  )
}

export default ButtonBase;
