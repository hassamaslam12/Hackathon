import React from 'react'
import { useSelector } from 'react-redux'

const Checking = () => {
  const userDetails = useSelector((a:any)=>a.user)
  console.log(userDetails);
  
  return (
    <div>
      checking
    </div>
  )
}

export default Checking
