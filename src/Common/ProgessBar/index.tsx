import React from 'react'
import './index.scss'
import { Circle } from 'rc-progress'

interface IProgressProps {
  percent: number,
  width: number,
  // trailWidth: number
}

const ProgressBar: React.FC<IProgressProps> = ({ percent, width }) => {
  return <Circle className='circular-progress-bar' percent={percent} strokeWidth={width} />
}

export default ProgressBar