import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import LabelBase from './LabelBase'

function ErrorLabel(props) {
  return (
    <LabelBase
      className={`${props.className} bg-cinnabear-normal text-eggshell-normal`}
      icon={<FaExclamationTriangle />}
    >
      {props.children}
    </LabelBase>
  )
}

export default ErrorLabel
