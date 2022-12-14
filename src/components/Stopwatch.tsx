import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Stopwatch = () => {
  const[time, setTime]=useState(0)
  const [running, setRunning] = useState(false);

  const startStopwatch=()=>{
    setTime(time+1)

  }
  const pauseStopwatch=()=>{

  }
  const stopnresetStopwatch=()=>{
    setTime (0)
  }
  return (
    <Box sx={{width:"99vw", height:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Box sx={{width:"400px", height:"400px", borderRadius:"15px", border:3, borderColor:"#1976d2", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
      <Typography variant="h4" sx={{textAlign:"center",marginTop:15, gridColumnStart:1, gridColumnEnd:4, color:"#1976d2"}}>{time}</Typography>
      <Button onClick={startStopwatch} sx={{color:"#1976d2"}}>Start</Button>
      <Button onClick={pauseStopwatch} sx={{color:"#1976d2"}}>Pause</Button>
      <Button onClick={stopnresetStopwatch} sx={{color:"#1976d2"}}>Stop and Reset</Button>
      </Box>
  </Box>
    
  )
}

export default Stopwatch

