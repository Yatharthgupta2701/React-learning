import React from 'react'
import RightCards from './RightCards'

const RightContent = (props) => {
  console.log(props);
  return (
    <div className='shrink-0 h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.users.map(function(elem, idx){
        return <div key={idx}>
          <RightCards
            id={elem.idx}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
            />
        </div>
      })}
    </div>
  )
}

export default RightContent
