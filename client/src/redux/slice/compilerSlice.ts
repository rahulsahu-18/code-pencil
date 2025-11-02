import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface initialStateType{
   currentLanguge:"js" | "html" | "css",
   fullCode:{
    html:string,
    css:string,
    js:string
   }
}

 const initialState:initialStateType = {
    currentLanguge:"html",
    fullCode:{
    html:"",
    css:"",
    js:""
   }
}

const compilerSlice = createSlice({
    name:"compiler",
   initialState,
   reducers:{
    updateCurrentLanguge:(state,action:PayloadAction<initialStateType["currentLanguge"]>)=>{
        state.currentLanguge = action.payload
    },
    updateCodeValue:(state,action:PayloadAction<string>) =>{
        state.fullCode[state.currentLanguge] = action.payload
    }
   }
})

export default compilerSlice.reducer;
export const {updateCurrentLanguge,updateCodeValue} = compilerSlice.actions