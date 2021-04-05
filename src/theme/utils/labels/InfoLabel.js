import React from 'react'
import { FaInfo } from 'react-icons/fa'
import LabelBase from './LabelBase'

function InfoLabel(props) {
  return (
    <LabelBase
      className={`${props.className} bg-coral-normal text-eggshell-normal`}
      icon={<FaInfo />}
    >
      {props.children}
    </LabelBase>
  )
}

export default InfoLabel
