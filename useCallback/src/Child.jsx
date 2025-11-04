import React from 'react'

const Child = ({sendData}) => {
    const message = "Hello from child"
  return (
    <div>
        <h2>Child</h2>
      <button onClick={()=>sendData(message)}>OnClick</button>
    </div>
  )
}

export default Child
