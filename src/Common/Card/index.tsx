import React from 'react'
import './index.scss'

interface ICardProps {
  className?: string,
  children: any
}

const Card: React.FC<ICardProps> = ({ className, children }) => {
  return (
    <div className={'card-style ' + (className || '')}>
      {children}
    </div>
  )
}

export default Card
