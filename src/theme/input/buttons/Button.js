import React from 'react'
import ButtonBase from './ButtonBase'

function rightIcon(icon) {
  if (icon) {
    return (
      <div className="ml-2">
        {icon}
      </div>
    )
  }
}

function leftIcon(icon) {
  if (icon) {
    return (
      <div className="mr-2">
        {icon}
      </div>
    )
  }
}


function Button(props) {
  return (
    <ButtonBase
      disabled={props.disabled} 
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      className={props.className}
      innerClassName={`${props.innerClassName} flex items-center justify-center p-2 shadow-md rounded-md bg-coral-normal hover:bg-coral-light active:bg-coral-dark text-eggshell-normal`}
    >
      {leftIcon(props.leftIcon)}
      {props.children}
      {rightIcon(props.rightIcon)}
        
    </ButtonBase>
  )
}

export default Button
