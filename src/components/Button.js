import React from 'react';

function Button(props) {
  return (
    <div className={`button`}>
      <button disabled={props.disabled} onClick={props.onClick} className="w-full transition-all duration-200 ease-in-out bg-coral-normal disabled:bg-coral-light disabled:cursor-not-allowed p-2 rounded-md text-xl text-eggshell-normal">
        {props.children}
      </button>
    </div>
  )
}

export default Button;
