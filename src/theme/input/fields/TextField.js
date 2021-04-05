import React from 'react'

const validTypes = ["text", "password", "username"]

function TextField(props) {

  function getType() {
    if (validTypes.indexOf(props.type) !== -1) {
      return props.type
    }
  }
  

  return (
    <div className={`${props.className} flex items-center w-full sm:w-64 shadow-md rounded-md bg-eggshell-light text-coral-normal`}>
      <div className="transition-all duration-200 ease-in-out px-2">
        {props.icon}
      </div>
      <div className="w-full">
        <input 
          className="bg-transparent py-2 focus:outline-none w-full"
          type={getType()} 
          name={props.id} 
          placeholder={props.placeholder} 
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          value={props.value} 
        />
      </div>
    </div>
  )
}

export default TextField
