import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { postAdded } from "../features/post/postSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUsers } from "../features/Users/userSlice";

function AddPostForm() {

  const dispatch=useDispatch();

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [userID,setUserID]=useState('');

  const users=useSelector(selectAllUsers);

  const onNameChange=e=>setName(e.target.value);
  const onEmailChange=e=>setEmail(e.target.value);
  const onAuthorChange=e=>setUserID(e.target.value);

  const SavePost=()=>{
    if(name && email)
    {
      // dispatch(
      //   postAdded({
      //     id:nanoid(),
      //     name:name,
      //     email:email
      //   })
      // )

      dispatch(postAdded(name,email,userID))

      setEmail("");
      setName("")
    }
  }

  // const usersOptions=users.map(user=>(
  //   <option key={user.id} value={user.id}>
  //     {user.author}
  //   </option>
  // ))

  const canSave=Boolean(name)&&Boolean(email)&&Boolean(userID)

  return (
    <div className="postForm">
      <h2>Add New Post</h2>

      <label htmlFor="postName">Post Name : </label>
      <input
      type="text"
      id="postName"
      name="postName"
      value={name}
      onChange={onNameChange}
      placeholder="Please Enter name"
      />

      <label htmlFor="postAuthor">Author: </label>
      <select 
      id="postAuthor" 
      value={userID} 
      onChange={onAuthorChange}>
        <option value=""></option>
        {/* {usersOptions} */}
        {users.map(user=>(
        <option key={user.id} value={user.id}>
          {user.author}
          </option>
          ))}
      </select>

      <label htmlFor="postEmail">Post Email : </label>
      <input
      type="text"
      id="postEmail"
      name="postEmail"
      value={email}
      onChange={onEmailChange}
      placeholder="Please Enter email"
      />

      <button 
      type="button" 
      onClick={SavePost}
      disabled={!canSave}>
        Save Post
        </button>

    </div>
  )
}

export default AddPostForm;