import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = props => (
  <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
    <Link to='/' role='button' className='sidebar-brand d-flex align-items-center justify-content-center'>
      <div className='sidebar-brand-text mx-3'>Welcome {props.name}</div>
    </Link>
    <hr className="sidebar-divider my-0"></hr>
    <li className="nav-item">
      <Link to='/' role='button' className='nav-link'>Home</Link>
    </li>
    <li className="nav-item">
      <Link to='/targets' role='button' className='nav-link'>Targets</Link>
    </li>
    <hr className="sidebar-divider my-0"></hr>
  </ul>
)

export default NavMenu
