import { useState } from 'react';

//1.Named imports & export
//2.default
export function Counter(){
    // let like=10;
    //const[state,setState]=useState(Initial value);
    const[like,setLike]=useState(0);
    const[unlike,setUnlike]=useState(0);
    return(
      <div className="counter-container">
        <button className="likes" onClick={()=>{
          setLike(like+1)
        }}>👍{like}</button>
        <button className="likes" onClick={()=>{
          setUnlike(unlike+1)
        }}>👎{unlike}</button>
        
      </div>
    )
  }
  