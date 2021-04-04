import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorLabel(props) {
  
  if (!props.label) {
    return null;
  }

  return (
    <div className={`errorlabel ${props.className} flex items-center w-full transition-all duration-200 ease-in-out bg-cinnabear-normal py-2 rounded-md text-sm text-eggshell-normal`}>
      <div className={`transition-all duration-200 ease-in-out animate-bounce px-2 ${props.iconContainerClassName}`}>
        <FaExclamationTriangle />
      </div>
      <div>
        <p>{props.label}</p>
      </div>
    </div>
  )
}

export default ErrorLabel;
