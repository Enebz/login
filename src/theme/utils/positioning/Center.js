import React from 'react'

function Center(props) {
  return (
    <div className={`center ${props.className} flex items-center justify-center`}>
      {props.children}
    </div>
  )
}

export default Center
