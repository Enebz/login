import React, { useState } from 'react'

function Switch(props) {

  return (
    <div onClick={() => {
        if (props.disabled) {
          return;
        }

        if (props.onChange) {
          props.onChange(props.id)
        }
      }} className={`p-1 w-16 h-8 rounded-full shadow-md bg-eggshell-light ${props.disabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
      <div className={`transform transition-all duration-300 ease-in-out w-6 h-6 rounded-full ${props.toggled ? "translate-x-8 bg-green-500" : "bg-coral-normal"} ${props.disabled ? "bg-eggshell-dark" : ""}`}></div>
    </div>
  )
}

export default Switch
