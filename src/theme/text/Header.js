import React from 'react'

function Header(props) {
  return (
    <p className={`${props.className} font-black`}>
      {props.children}
    </p>
  )
}

export default Header
