import React,{useCallback, useState} from "react";
import Child from "./Child";

function Parent(){
    const [message, setMessage] = useState("")
    const handleDate = useCallback((data)=>{
        setMessage(data)
    },[])
    return(
        <div>
            <h2>{message}</h2>
            <Child sendData={handleDate}/>
        </div>
    )
}

export default Parent
