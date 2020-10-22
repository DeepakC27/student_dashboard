import React from 'react'
import './index.scss'

interface Props {
  className?: string,
  children: any
}

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={'card-style ' + (className || '')}>
      {children}
    </div>
  )
}

export default Card
