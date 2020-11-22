import React from 'react'
import './index.scss'
import { BellIcon, AdminIcon } from '../../Common'

const Header: React.FC = () => {
  return (
    <nav className='fixed-top'>
      <ul>
        <li className='logo'>
          <a href='/'><h2>LOGO</h2></a>
        </li>
        <li>
          <div className='notification'>
            <BellIcon />
          </div>
        </li>
        <li>
          <div className='loggedin-user-info'>
            <AdminIcon />
            <span>Admin User</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Header
