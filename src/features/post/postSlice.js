import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState=[
    {id:'1',name:'izaan',
    email:'izaan@gmail.com',
    date:sub(new Date(),{minutes:10}).toISOString(),
reactions:{
    thumbsUp:0,
    wow:0,
    heart:0,
    rocket:0,
    coffee:0,
}},
    {id:'2',name:'manzar',
    email:'manzar@gmail.com',
    date:sub(new Date(),{minutes:5}).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0,
    }},
    {id:'3',
    name:'Ali',
    email:'Ali@gmail.com',
    date:sub(new Date(),{minutes:10}).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0,
    }},
]


const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer:(state,action)=>{
                state.push(action.payload)
            },
            prepare:(name,email,userId)=>{
                return{
                    payload:{
                        id:nanoid(),
                        name,
                        email,
                        date:new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0,
                        }
                    }
                }
            }
        },
      reactionAdded:(state,action)=>{
        const {postId,reaction}=action.payload;
        const existingPost=state.find(post=>post.id===postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }
      },  
    },
})

export const {postAdded,reactionAdded}=postSlice.actions;
export default postSlice.reducer