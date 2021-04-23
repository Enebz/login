import React, { useRef, useState } from 'react';
import hooks from '../utils/hooks'

import { FaChevronDown, FaHome, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Header from '../theme/text/Header';
import IconButton from '../theme/input/buttons/IconButton';


function Links(props) {
  return (
    <div className={props.containerClassName}>
      <Link to="/">
        <div className={props.itemClassName}>
          <FaHome />
          <p className="pl-2">Hjem</p>
        </div>
      </Link>
      <Link to="/bestill">
        <div className={props.itemClassName}>
          <FaInfoCircle />
          <p className="pl-2">Bestill</p>
        </div>
      </Link>
    </div>
  )
}

function Navigation(props) {

  const [dropdown, setDropdown] = useState(false)

  const dropdownRef = useRef(null);
  hooks.useOutsideAlerter(dropdownRef, handleClickOutside);

  function handleClickOutside() {
    setDropdown(false);
  }
  
  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div className="nav">
      <nav className="flex items-center justify-between flex-wrap text-eggshell-normal bg-coral-normal py-4 px-4">

        {/* Logo */}
        <Header type={3}>Frisbee Golf</Header>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Links 
            containerClassName="hidden sm:flex gap-4"
            itemClassName="flex items-center p-2 rounded-md hover:text-coral-light"
          
          />

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            {/* Dropdown button */}
            <IconButton
              onClick={toggleDropdown}
              transparent={true}
              className="text-eggshell-normal"
            >
              <FaChevronDown />
            </IconButton>

            {/* Dropdown box */}
            <div className={`${dropdown ? "" : "hidden"} absolute right-0 mt-4 origin-top-right w-64`}>
              <div className="bg-eggshell-normal rounded-md shadow p-2 divide-y-2 divide-eggshell-dark">

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

export default Navigation;
