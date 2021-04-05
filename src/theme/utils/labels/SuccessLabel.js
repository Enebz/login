import React from 'react'
import { FaCheck } from 'react-icons/fa'
import LabelBase from './LabelBase'

function SuccessLabel(props) {
  return (
    <LabelBase
      className={`${props.className} bg-green-500 text-eggshell-normal`}
      icon={<FaCheck />}
    >
      {props.children}
    </LabelBase>
  )
}

export default SuccessLabel
