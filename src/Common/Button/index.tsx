import React from 'react'
import './index.scss'

interface IButtonProps {
  className?: string,
  children: any
}

const Button: React.FC<IButtonProps> = ({ className, children }) => {
  return (
    <button className={'btn ' + (className || '')}>
      {children}
    </button>
  )
}

export default Button
