import React, { useContext } from 'react'
import { NavbarContext } from '../../../contexts/navbar.context'
import DropdownNav from '../dropdown-nav/dropdown-nav'
import './burger.styles.scss'

const Burger = () => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useContext(NavbarContext)

  const handleClick = () => {
    setIsMobileNavOpen((prev) => !prev)
  }
  return (
    <div className="hamburger-container">
      <svg
        id="hamburger"
        className={`burger-svg ${isMobileNavOpen ? 'active' : ''}`}
        viewBox="0 0 45 45"
        onClick={handleClick}
      >
        <g
          stroke="#3c403f"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path id="top-line" d="M10,10 L35,10 Z"></path>
          <path id="middle-line" d="M10,20 L35,20 Z"></path>
          <path id="bottom-line" d="M10,30 L35,30 Z"></path>
        </g>
      </svg>
      {isMobileNavOpen && <DropdownNav />}
    </div>
  )
}

export default Burger
