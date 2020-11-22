import React from 'react'
import './index.scss'

const BellIcon: React.FC = () => <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-bell-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>

const AdminIcon: React.FC = () => <div className='common-icons admin-icon' />

const UserIcon: React.FC = () => <div className='common-icons user-icon' />

export {
  BellIcon,
  AdminIcon,
  UserIcon
} 