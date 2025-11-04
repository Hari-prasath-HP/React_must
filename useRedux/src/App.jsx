import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { increment,decrement,reset } from "./Store";

const App = () =>{
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return(
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default App