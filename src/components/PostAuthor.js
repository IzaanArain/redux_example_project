import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/Users/userSlice";

const PostAuthor = ({userid}) => {

    const users=useSelector(selectAllUsers);
    const author=users.find(user=>user.id===userid);
    
  return (
    <div>
        <span>by {author ? author.author : 'unknown author'}</span>
    </div>
  )
}

export default PostAuthor;