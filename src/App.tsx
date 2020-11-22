import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import PerformanceComp from './Components/PerformanceComp'
import { postRequestAsync } from './Api'

const App: React.FC = () => {
  const [studentDetails] = useState({
    Name: 'Deepak',
    EmailId: 'chaudharideepak10@hotmail.com',
    MobileNo: 9028325881,
    BatchNo: 'B'
  })

  useEffect(() => {
    const getStudentList = () => {
      postRequestAsync('/getSubjects', {})
      .then(response => {
        console.log('resp: ', response)
      })
      .catch(err => {
        console.log(err)
      })
    }
    getStudentList()
  }, [studentDetails])
  
  return (
    <div className='App'>
      <Header />
      <main>
        <section>
          <Profile {...studentDetails} />
        </section>
        <section>
          <PerformanceComp />
        </section>
      </main>
    </div>
  )
}

export default App
