import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import { signupUser } from '../config/firebaseConfig/FirebaseMehtod'

const Signup = () => {

    const [inpData,setInpData] = useState<any>({email: '', password:"",name:""})
    const navigate = useNavigate()

    const inpChangeHandler = (e:any)=>{
        setInpData((prev:any)=>({...prev,[e.target.id]:e.target.value}))
    }
    console.log(inpData);

    const signupUserScreen = () =>{
        signupUser(inpData.email,inpData.password,inpData.name)
        .then((res) =>{
            navigate('/')
        })
        .catch((err)=>alert(err));
    }


    
  return (
    <div>
        {/* Signup<br/>
        <input onChange={(e)=>inpChangeHandler(e)} type="text" placeholder="E-mail" id='email' value={inpData.email}/><br/>
        <input onChange={(e)=>inpChangeHandler(e)} type="text" placeholder="password" id='password' value={inpData.password}/><br/>
        <input onChange={(e)=>inpChangeHandler(e)} type="text" placeholder="Name" id='name' value={inpData.name}/><br/>
        <button onClick={submitHandler}>Submit</button>
        <Link to="/login">Already have an Account?</Link> */}
        
    <Stack sx={{
        height: '100vh',
       
        background: 'linear-gradient(180deg, rgba(91,152,217,1) 27%, rgba(155,212,134,1) 100%)'
    }} 
    justifyContent={'center'} 
    alignItems={'center'}>

        <Stack sx={{
            bgcolor: '#FFF',
            borderRadius: '10px',
            boxShadow: '0px 0px 20px #555',
            width:'30%'
        }}
        p={5}
        gap={2}
        >
            <Box>
              <Typography variant='h5'>

              Signup
              </Typography>
              </Box>
            
            <Stack>
                <TextField label={'E-mail'} id='email' onChange={inpChangeHandler} />
            </Stack>
            <Stack>
                <TextField label={'Password'} id='password' type='password' onChange={inpChangeHandler}/>
            </Stack>
            <Stack>
                <TextField label={'name'} id='name' type='text' onChange={inpChangeHandler}/>
            </Stack>
            <Stack>

           

                <Button variant='contained'  sx={{
        
        background: 'linear-gradient(124deg, rgba(91,152,217,0.7) 27%, rgba(155,212,134,0.7) 100%)',
        my:2
                }}
                onClick={()=>{signupUserScreen()}}>
                    Signup
                </Button>
                <Link to="/login">Already have an Account?</Link>
                

            </Stack>


        </Stack>

    </Stack>

    </div>
  )
}

export default Signup