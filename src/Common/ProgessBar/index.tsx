import React from 'react'
import './index.scss'
import { Circle } from 'rc-progress'

interface Props {
  percent: number,
  width: number,
  // trailWidth: number
}

const ProgressBar: React.FC<Props> = ({ percent, width }) => {
  return <Circle className='circular-progress-bar' percent={percent} strokeWidth={width} />
}

export default ProgressBar