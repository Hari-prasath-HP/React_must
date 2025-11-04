import React, { useMemo, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  console.log("Rendering...")
  const expensiveCalculation = useMemo(()=>{
    console.log('Calculating...')
    return slowFunction(count)
  },[count])
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
      <h3>{expensiveCalculation}</h3>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

function slowFunction(num){
  console.log("Calculating too slow")
  for(let i=0;i<1000000000;i++){}
    return num*2
}

export default App
