import React from 'react'
import "./Liste.css"
import { useTrail, animated } from '@react-spring/web'
import Card from '../../Components/Card/Card'

export default function Liste() {

  const trail = useTrail(9, {
    from: {
      opacity : 0,
      x:20
    },
    to:{
      opacity: 1,
      x: 0
    }
  })

  return (
    <div className='list-container'>
      {trail.map((cardStyle, index)=>{
        return <animated.div
        key={index}
        style={cardStyle}>
            <Card/>
        </animated.div>
      })}
    </div>
  )
}
