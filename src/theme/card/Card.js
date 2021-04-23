import React from 'react'

function Card(props) {

  return (
    <div 
      className={`card ${props.className} flex flex-col shadow-md rounded-md ${props.divider ? "divide-y-2 divide-eggshell-darker" : ""} bg-eggshell-dark`}
    >
      {props.children}
    </div>
  )
}

export default Card
