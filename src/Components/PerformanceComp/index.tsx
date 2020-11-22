import React, { useEffect, useRef, useState } from 'react'
import { ProgressBar, Loader, Card } from '../../Common'
import setObserver from '../../Utils/IntersectionObserver'
import './index.scss'


const PerformanceComp: React.FC = () => {
  const [subjectsList] = useState(['English', 'Maths', 'Physics', 'Chemistry', 'History'])
  const [marksList, setMarksList] = useState([0, 0, 0, 0, 0])

  useEffect(() => {
    if (marksList[0] === 0) {
      const updateMarks = setTimeout(() => { setMarksList([65, 85, 45, 70, 30]) }, 1000)
      return () => clearTimeout(updateMarks)
    }
  }, [marksList])

  return <Card className='performance-container'>
    <div>
      <div className='analytics-section-1'>
        <Card className='mini-card'>
          <Loader />
        </Card>
        <Card className='mini-card'>
          <Loader />
        </Card>
      </div>
    </div>
    {/* <div className='custom-progress-bar' /> */}
    <div className='analytics-section-2'>
      <div className='subjective-analytics'>
        {subjectsList.length && subjectsList.map((subjectName: string, idx: number) =>
          <SubjectCard key={idx} idx={idx} subjectName={subjectName} mark={marksList[idx]} />
        )}
      </div>
    </div>
  </Card>
}

interface SubjectProps {
  idx: number,
  subjectName: string,
  mark: number
}
const SubjectCard: React.FC<SubjectProps> = ({ idx, subjectName, mark }) => {
  const [subjectMark, setMark] = useState(mark)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current) {
      const callBack = () => console.log(`${mark} into view`)
      setObserver(elementRef.current, callBack)
    }
  }, [elementRef, mark])

  useEffect(() => {
    const renderMark = setTimeout(() => {
      if (mark === subjectMark) {
        clearTimeout(renderMark)
      } else {
        let test = subjectMark
        test++
        setMark(test)
      }
    }, 5)

    return () => clearTimeout(renderMark)
  }, [mark, subjectMark])

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
            Theoratical: 45
            <br/>
            Practical: 15
          </p>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(PerformanceComp)
