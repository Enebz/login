import React from 'react'
import './Counter.css';

function Counter(props) {
  return (
    <div className="h-10 w-32">
      <div className="flex flex-row h-10 w-full relative rounded-lg bg-transparent mt-1">
        <button onClick={props.onDecrement} className=" bg-eggshell-darkest text-coral-normal hover:text-coral-dark hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none focus:outline-none">
          <span className="m-auto text-2xl font-black">−</span>
        </button>
        <input 
          type="number" 
          className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700" 
          value={props.value}
          onChange={props.onChange}
          >
        </input>
        <button onClick={props.onIncrement} className="bg-eggshell-darkest text-coral-normal hover:text-coral-dark hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none focus:outline-none">
          <span className="m-auto text-2xl font-black">+</span>
        </button>
      </div>
    </div>
  )
}

export default Counter