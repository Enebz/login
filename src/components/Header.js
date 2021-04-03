import React, { useState } from 'react';
import { FaChevronDown, FaHome, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileWidget from './ProfileWidget';


function Links(props) {
  return (
    <div className={props.containerClassName}>
      <Link to="/">
        <div className={props.itemClassName}>
          <FaHome />
          <p className="pl-2">Home</p>
        </div>
      </Link>
      <Link to="/about">
        <div className={props.itemClassName}>
          <FaInfoCircle />
          <p className="pl-2">About</p>
        </div>
      </Link>
    </div>
  )
}

function Header(props) {

  const [dropdown, setDropdown] = useState(false)
  
  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div className="header">
      <nav className="flex items-center justify-between flex-wrap text-eggshell-normal bg-coral-normal py-4 px-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-black ">Title</h1>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Links 
            containerClassName="hidden sm:flex gap-4"
            itemClassName="flex items-center p-2 rounded-md hover:text-coral-light"
          
          />

          {/* Dropdown */}
          <div className="relative">
            {/* Dropdown button */}
            <button onClick={toggleDropdown} className="">
              <FaChevronDown className="text-xl hover:text-coral-light" />
            </button>

            {/* Dropdown box */}
            <div className={`${dropdown ? "" : "hidden"} absolute right-0 mt-4 origin-top-right w-64`}>
              <div className="bg-eggshell-normal rounded-md shadow p-2 divide-y-2 divide-eggshell-dark">
                
                {/* Profile widget */}
                <ProfileWidget className="py-2" />

                {/* Links */}
                <Links 
                  containerClassName="flex flex-col p-2 w-full"
                  itemClassName="flex items-center p-2 rounded-md hover:bg-eggshell-light text-coral-normal"
                />

              </div>

            </div>

          </div>

        </div>

      </nav>

    </div>
  )
}

export default Header;
