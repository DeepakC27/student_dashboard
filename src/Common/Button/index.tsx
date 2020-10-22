import React from 'react'
import './index.scss'

interface ButtonProps {
  className?: string,
  children: any
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={'btn ' + (className || '')}>
      {children}
    </button>
  )
}

export default Button
