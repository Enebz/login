import React from 'react';

function InputbarLabel(props) {
  if (props.label === null) {
    return null;
  } else {
    return (
      <p>{props.label}</p>
    )
  }
}

function InputBar(props) {
  return (
    <div className={`inputbar ${props.className} flex flex-col`}>
      <InputbarLabel label={props.label} />
      <div className={`flex items-center rounded-md bg-eggshell-light text-coral-normal`}>
        <div className={`transition-all duration-200 ease-in-out px-2`}>
          {props.icon}
        </div>
        <div className="w-full">
          <input 
            className={`${props.barClassName} bg-transparent py-2 focus:outline-none w-full`}
            type={props.type} 
            name={props.name} 
            placeholder={props.placeholder} 
            autoComplete={props.autoComplete}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            value={props.value} 
          />
        </div>
      </div>
    </div>
  )
}

export default InputBar;
