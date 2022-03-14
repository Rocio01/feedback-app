import React from 'react'

const Card = ({children, reverse}) => {
  return (
    // conditional card
    // <div className={ `card ${reverse&& 'reverse'}` }>
    //   {children}
    // </div>

    // conditional style
    <div className="card" style={{
      backgroundColor: reverse? 'rgba(0,0,0,0.4)' : '#fff',
      color: reverse ? '#fff' : '#000'
    }}>
      {children}
    </div>
  )
}

export default Card