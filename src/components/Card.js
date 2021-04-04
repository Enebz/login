import React from 'react'

function Card(props) {
  return (
    <div 
      className={`card ${props.className} flex flex-col p-4 shadow rounded-md divide-y-2 divide-eggshell-dark bg-eggshell-darker`}
    >
      {props.children}
    </div>
  )
}

export default Card
