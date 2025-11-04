import React from 'react'
import { useState } from 'react'

const Child = React.memo(({name})=>{
  console.log("Child component rendered")
  return <h3>child-Component {name}</h3>
})

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Hari')
  return (
    <div>
     <h2>{count}</h2>
     <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
     <Child name={name} /> 
    </div>
  )
}


export default App