import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = props => (
  <div>
    <h2>Welcome {props.name}!</h2>
    <Link to='/targets' role='button'>Targets</Link>
    <Link to='/' role='button'>Home</Link>
  </div>
)

export default NavMenu
