import React from 'react'

function Card(props) {

  if (props.divider === null) {
    props.divider = true;
  }

  return (
    <div 
      className={`card ${props.className} flex flex-col p-4 shadow-md rounded-md ${props.divider ? "divide-y-2 divide-eggshell-dark" : ""} bg-eggshell-dark`}
    >
      {props.children}
    </div>
  )
}

export default Card
