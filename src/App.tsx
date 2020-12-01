import React, { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import PerformanceComp from './Components/PerformanceComp'

const App: React.FC = () => {
  const [studentDetails] = useState({
    Name: 'Deepak',
    EmailId: 'chaudharideepak10@hotmail.com',
    MobileNo: 9028325881,
    BatchNo: 'B'
  })
  
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
