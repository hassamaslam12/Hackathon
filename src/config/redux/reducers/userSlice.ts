import { createSlice } from "@reduxjs/toolkit";
import { checkUser } from "../../firebaseConfig/FirebaseMehtod";



const userSlice = createSlice({
    name: 'user',
    initialState: {
        id:null

    },
    reducers:{
        authChecking:(state,action)=>{
            state.id = action.payload.id;
        }
    }

})

export const {authChecking} = userSlice.actions
export default userSlice.reducer;