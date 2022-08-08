import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
export const Notfound = () => {
    const navigate =useNavigate()
    const showDetail=()=>{
        navigate(`/`)
    }
  return (
    <div className='app'>
        <div id="footer">
        <h1>404 Error Site</h1><br/>
        <Button  onClick={showDetail} variant='dark' >Home</Button>
        </div>
        
    </div>
  )
}
