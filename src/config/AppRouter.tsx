import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Protected from '../Components/Protected'
import Checking from '../screens/Checking'
import { useDispatch, useSelector } from 'react-redux'
import { checkUser } from './firebaseConfig/FirebaseMehtod'
import { authChecking } from './redux/reducers/userSlice'

const AppRouter = () => {

  const dispatch= useDispatch();
  const [userID,setUserID] = useState<any>(null);

  useEffect(()=>{
    checkUser().then((res:any)=>{
      console.log(res);
      
      dispatch(authChecking({id: res.uid}))
      setUserID(res.uid); 

    })
  },[])
  // const userDetails = useSelector((a:any)=>a.user)
  // console.log(userDetails);
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/checking" element={<Protected Component={<Checking />} userID={userID}/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
