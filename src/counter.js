import { useState , useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
//1.Named imports & export
//2.default
export function Counter(){
    // let like=10;
    //const[state,setState]=useState(Initial value);
    const[like,setLike]=useState(0);
    const[unlike,setUnlike]=useState(0);

useEffect(()=>{
  console.log("like is update",like)
},[like,unlike])

    return(
      <div className="counter-container">
<IconButton aria-label="like" color="primary"
className="likes" onClick={()=>{
          setLike(like+1)
        }}>
        <Badge badgeContent={like} color="primary">
👍
</Badge>
</IconButton>
<IconButton aria-label="unlike" color="error"
onClick={()=>{
  setUnlike(unlike+1)
}}><Badge badgeContent={unlike} color="error">
👎
</Badge>      
</IconButton>
      </div>
    )
  }
  