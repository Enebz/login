import React from 'react';

function Body(props) {
  return (
    <div className={`body ${props.className} py-8 px-8 sm:px-32`}>
      {props.children}
    </div>
  )
}

export default Body;