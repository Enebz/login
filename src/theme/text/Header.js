import React from 'react'

function Header(props) {

  function getType() {
    if (!props.type) {
      return "4"
    }

    if (isNaN(props.type)) {
      return "4"
    }

    if (props.type < 1) {
      return "4"
    }

    if (props.type > 4) {
      return ""
    }

    if (props.type === 4) {
      return ""
    }

    return Math.abs(props.type - 5).toString()
  }

  return (
    <p className={`font-black text-${getType()}xl`}>
      {props.children}
    </p>
  )
}

export default Header
