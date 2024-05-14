import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../contexts/user.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import { NavbarContext } from '../../../contexts/navbar.context'
import { scrollToTop } from '../../../utils/scrollToTop'
// import Navigation from '../Navigation'
import './dropdown-nav.styles.scss'

const DropdownNav = () => {
  const { currentUser } = useContext(UserContext)
  const { toggleMobileNav } = useContext(NavbarContext)
  const navigate = useNavigate()

  const handleLinkClick = (path) => {
    toggleMobileNav()
    navigate(path)
    scrollToTop()  
  }

  return (
    <>
      <div className="dropdown-container">
        <Link className="nav-link" to="/shop/" onClick={() => toggleMobileNav()}>
          SHOP
        </Link>
        <Link
          className="nav-link"
          to="/about"
          onClick={() => toggleMobileNav()}
        >
          ABOUT
        </Link>
        {currentUser ? (
          <span
            className="nav-link"
            onClick={() => {
              signOutUser()
              handleLinkClick('/')
            }}
          >
            SIGN OUT
          </span>
        ) : (
          <Link
            className="nav-link"
            to="/auth"
            onClick={() => toggleMobileNav()}
          >
            SIGN IN
          </Link>
        )}
      </div>
    </>
  )
}

export default DropdownNav
