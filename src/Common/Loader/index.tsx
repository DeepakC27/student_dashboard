import React from 'react'
import './index.scss'

const Loader: React.FC = () => {
  return <div className='loader'>Loader
    <div className='loader-dot-1' />
    <div className='loader-dot-2' />
    <div className='loader-dot-3' />
  </div>
}

export default Loader