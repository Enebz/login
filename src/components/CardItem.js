import React from 'react'

function CardItem(props) {
  return (
    <div className={`carditem ${props.className} ${props.first ? 'pb-2' : props.last ? 'pt-2' : 'py-2'}`}>
      {props.children}
    </div>
  )
}

export default CardItem
