import {
    useParams
  } from "react-router-dom";
import PostList from "../containers/postlist";
  
const UserPage = ({posts, usersObject}) => {
    let { id } = useParams();

    let foundUser = usersObject[id] 
    let userPosts = posts?.filter(post => post.user.id === foundUser.id);

    return (
        <>
        User Page!
      { console.log(foundUser, userPosts)}
        <PostList posts={userPosts}/>
        </>
    )
}

export default UserPage;