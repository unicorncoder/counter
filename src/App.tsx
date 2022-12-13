import { useState } from 'react'
import {Box, Button, Typography} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount =()=>{
    setCount(count+1)
  }

  const decrementCount =()=>{
    setCount(count-1)
  }

  const resetCount =()=>{
    setCount(0)
  } 

  return (
    <Box sx={{height:"100vh", display:"flex", justifyContent:"center" }}>
        <Box sx={{width:"400px", height:"400px", backgroundColor:"aliceblue", borderRadius:"15px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", position:"center", alignSelf:"center"}}>
        <Typography variant="h4" sx={{textAlign:"center", marginTop:15, gridColumnStart:1, gridColumnEnd:4}}>{count}</Typography>
        <Button onClick={incrementCount}>Increment</Button>
        <Button onClick={decrementCount}>Decrement</Button>
        <Button onClick={resetCount}>Reset</Button>
    </Box>
    </Box>
  
  )
}

export default App