import React from 'react'
import ButtonBase from './ButtonBase'

function IconButton(props) {

  const hollow = "text-coral-normal hover:text-coral-light active:text-coral-dark"
  const filled = "bg-coral-normal hover:bg-coral-light active:bg-coral-dark text-eggshell-normal"

  function getType() {
    switch (props.type) {
      case "hollow":
        return hollow;
      case "filled":
        return filled;
      default:
        return hollow;
    }
  }

  

  return (
    <ButtonBase
      disabled={props.disabled} 
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      className={`${props.className} p-2 shadow-md rounded-full ${getType()}`}
    >
      {props.children}
        
    </ButtonBase>
  )
}

export default IconButton
