import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='py-8 px-18 h-[90vh] flex items-center gap-10'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Content
