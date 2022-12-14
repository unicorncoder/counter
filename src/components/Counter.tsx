import React, { useState, useEffect, useRef } from 'react'
import {Box, Button, Typography} from '@mui/material'

// function setDefaultValue(){
//   console.log("Function to set default value")
//   return 4;
// }


const Counter = () => {
    const [count, setCount] = useState(()=>{console.log("In useState")
    return 3})

    useEffect(()=>{console.log("in useEffect")}, [count])

    const currentValue= useRef(count)
    console.log(currentValue)

  const incrementCount =()=>{
    setCount(count+1)
  }

  const decrementCount =()=>{
    setCount(count-1)
  }

  
  const resetCount =()=>{
    setCount(4)
  } 
  return (
    <Box sx={{width:"99vw", height:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Box sx={{width:"400px", height:"400px", borderRadius:"15px",border:3, borderColor:"#1976d2", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
        <Typography variant="h4" sx={{textAlign:"center", marginTop:15, gridColumnStart:1, gridColumnEnd:4, color:"#1976d2"}}>{count}</Typography>
        
        <Button onClick={incrementCount} sx={{color:"#1976d2"}}>Increment</Button>
        <Button onClick={decrementCount} sx={{color:"#1976d2"}}>Decrement</Button>
        <Button onClick={resetCount} sx={{color:"#1976d2"}}>Reset</Button>
      </Box>
    </Box>
    
  )
}

export default Counter
