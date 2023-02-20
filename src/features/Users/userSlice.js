import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'1',author:"John Doe"},
    {id:'2',author:"kim possible"},
    {id:'3',author:"james Bond"},
];


const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})



export const selectAllUsers=(state)=>state.users;
export default userSlice.reducer;