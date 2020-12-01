import React, { useEffect, useRef, useState } from 'react'
import { ProgressBar, Card } from '../../Common'
import setObserver from '../../Utils/IntersectionObserver'
import './index.scss'

interface ISubjectProps {
  idx: number,
  subjectName: string,
  markInfo: IMakrs
}
interface IMakrs {
  Theory: {
    Total: number,
    MarksObtained: number
  }
  Practical?: {
    Total: number,
    MarksObtained: number
  }
}

const SubjectCard: React.FC<ISubjectProps> = ({ idx, subjectName, markInfo }) => {

  const [theoryMark] = useState(markInfo.Theory?.MarksObtained || 0)
  const [practicalMark] = useState(markInfo.Practical?.MarksObtained || 0)

  const [subjectMark, setMark] = useState(0)
  const [Total] = useState((markInfo.Theory?.Total || 0) +
    (markInfo.Practical?.Total || 0))
  const [renderingStatus, setRenderingStatus] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current && theoryMark && !renderingStatus) {
      const callBack = () => setRenderingStatus(true)
      setObserver(elementRef.current, callBack, { threshold: .8 })
    }
  }, [elementRef, theoryMark, renderingStatus])

  useEffect(() => {
    if (renderingStatus) {
      const renderMark = setInterval(() => {
        if ((theoryMark + practicalMark) === subjectMark) {
          clearTimeout(renderMark)
        } else {
          let markInc = subjectMark
          markInc++
          setMark(markInc)
        }
      }, 5)
      return () => clearInterval(renderMark)  
    }
  }, [practicalMark, renderingStatus, subjectMark, theoryMark])
  
  return (
    <Card key={idx}>
      <div className='field-label'>{subjectName}</div>
      <div ref={elementRef}>
        <div className='progress-bar-wrapper'>
          <span>
            <b>{subjectMark}</b>
            &nbsp;/&nbsp;100</span>
          <ProgressBar width={5} percent={subjectMark} />
        </div>
        <div className=''>
          <p>
            Theoratical: {theoryMark}
            <br/>
            {practicalMark > 0 && 
              <span>Practical: {practicalMark}</span>
            }
          </p>
        </div>
      </div>
    </Card>
  )
}

export default SubjectCard