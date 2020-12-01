import React from 'react'
import Card from '../../Common/Card'
import './index.scss'

interface IProfile {
  Name: string,
  EmailId: string,
  MobileNo: number,
  BatchNo: string  
}

const Profile: React.FC<IProfile> = ({ Name, EmailId, MobileNo, BatchNo}) => {
  return (
    <Card className='student-profile-container'>
      <div>
        <div className='field-label'>Name</div>
        <div>{Name}</div>
      </div>
      <div>
        <div className='field-label'>EmailId</div>
        <div>{EmailId}</div>
      </div>
      <div>
        <div className='field-label'>MobileNo</div>
        <div>{MobileNo}</div>
      </div>
      <div>
        <div className='field-label'>BatchNo</div>
        <div>{BatchNo}</div>
      </div>
    </Card>
  )
}

export default Profile
