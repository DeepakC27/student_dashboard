import React, { useEffect, useState } from 'react'
import { postRequestAsync } from '../../Api'
import { Loader, Card } from '../../Common'
import './index.scss'
import SubjectCard from './SubjectCard'

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

interface IRespItems {
  SubjectID: number,
  SubjectName: string,
  Marks: IMakrs
}

const PerformanceComp: React.FC = () => {
  const [subjectsList, setSubjectsList] = useState<Array<string>>([])
  const [marksList, setMarksList] = useState<Array<IMakrs>>([])

  useEffect(() => {
    if (marksList.length === 0) {
      const getStudentList = async () => {
        let response: any = await postRequestAsync('/getStudentResult', {})
        try {
          const subjects: Array<string> = [], marks: Array<IMakrs> = []
          response.map((item:IRespItems): object => {
            subjects.push(item.SubjectName)
            marks.push(item.Marks)
            // let marksObt = (item.Marks?.Theory?.MarksObtained || 0) +
            //   (item.Marks?.Practical?.MarksObtained || 0)
            // let totalMarks = (item.Marks?.Theory?.Total || 0) +
            // (item.Marks?.Practical?.Total || 0)
            return item
          })
          setSubjectsList(subjects)
          setMarksList(marks)
          console.log(marks)
          
        }
        catch (err) {
          console.log(err)
        }
      }
      getStudentList()
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
        {subjectsList.length && marksList.length &&
          subjectsList.map((subjectName: string, idx: number) =>
          <SubjectCard key={idx} idx={idx} subjectName={subjectName}
            markInfo={marksList[idx]} />
        )}
      </div>
    </div>
  </Card>
}

export default React.memo(PerformanceComp)
