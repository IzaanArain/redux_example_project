import { useSelector, useDispatch } from "react-redux"
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


function Posts() {
    const posts=useSelector(state=>state.posts);

    const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date)) //displays most recent post//sort post by date which is the most recent

    // const renderedPosts=posts.map(post=>(
    //     <article key={post.id}>
    //     <h3> name: {post.name}</h3>
    //     <h3> email: {post.email}</h3>
    //     </article>
    // ))

  return (
    <div>
        {/* {renderedPosts} */}
        <h1>POST</h1>
        {/* {
            posts.map(post=>(
                    <article key={post.id}>
                    <h3> name: {post.name}</h3>
                    <h3> email: {post.email}</h3>
                    <p className="postCredit">
                      <PostAuthor userid={post.userId}/>
                    </p>
                    <TimeAgo timestamp={post.date}/>
                    </article>
                ))
        } */}

         {
            orderedPosts.map(post=>(
                    <article key={post.id}>
                    <h3> ID : {post.id}</h3>
                    <h3> name : {post.name}</h3>
                    <h3> email : {post.email}</h3>
                    <p className="postCredit">
                      <PostAuthor userid={post.userId}/>
                    </p>
                    <TimeAgo timestamp={post.date}/>
                    <ReactionButtons post={post}/>
                    </article>
                ))
        }
    </div>
  )
}

export default Posts;