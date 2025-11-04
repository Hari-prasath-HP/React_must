import React, { useState } from 'react'
import Child from './Child'

const App = () => {
  const [message, setMessage] = useState("")

  const handle = (data) =>{
    setMessage(data)
  }
  return (
    <div>
      <h2>Parent</h2>
      <p>{message}</p>
      <Child sentDatatoParent={handle}/>
    </div>
  )
}

export default App
