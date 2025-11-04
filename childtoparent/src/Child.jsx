import React from 'react'

const Child = ({sentDatatoParent}) => {
    const sendMessage = () =>{
        sentDatatoParent("Hello parent")
    }
  return (
    <div>
      <h2>child Component</h2>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Child
