import React from 'react'

function LabelBase(props) {
  return (
    <div className={`${props.className} flex items-center p-2 w-max space-x-2 rounded-md shadow-md text-sm`}>
      
      <div>
        {props.icon}
      </div>

      <div>
        {props.children}
      </div>
    </div>
  )
}

export default LabelBase
