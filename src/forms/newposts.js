import { useState } from "react";
import { uid } from 'uid';
import axios from 'axios';
const NewPosts = ({user, setPosts, usersObject}) => {
    let [post, setPost] = useState('');

    const createPost = () => {
        axios.post("http://localhost:3000/posts", {
            "id": uid(),
            'content': post,
            "likes": 0,
            "user_likes_id": [],
            "user_id": user.id,
            "created_at": Date.now()
        }).then(post=>
            // setPosts(posts => {
            //     console.log(posts)
            //     return posts;
            //     return [{...post.data, user: usersObject[post.data.user_id]}, ...posts ]
            setPosts(posts=> [ {...post.data, user: usersObject[post.data.user_id]}, ...posts ])
            ).then(console.log)
        
    };

    return (
        <>
        {/* <h6>Hey {user.username}, what's on your mind?</h6>
         */}
        <input type='text' placeholder="Enter new post!" onChange={(e) => setPost(e.target.value)}/>
        <button onClick={createPost}> Button </button>
        <br></br>
        <hr></hr>
    </>
    )
}

export default NewPosts;