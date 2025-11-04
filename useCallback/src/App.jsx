import React,{useState,useCallback} from "react";

function Counter(){
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  
  const increment = useCallback(()=>{
    setCount((prev)=>prev+1)
  },[])
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment()}>Increment</button>
      <br /><br />
      <input type="text" value={text} placeholder="Enter" onChange={(e)=>setText(e.target.value)} />
      <h4>{text}</h4>
    </div>
  )
}

export default Counter