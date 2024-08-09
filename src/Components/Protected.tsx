import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
interface Props {
    Component:any,
    userID:any
}



const Protected = (props:Props) => {
    const {Component,userID} = props
    
   

    
  return (
    <>
        {userID?Component:<>No user Found</>}
    </>
  )
}

export default Protected
