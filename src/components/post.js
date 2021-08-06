import { Link } from 'react-router-dom';

const Post = ({post}) => {
    return (
        <>
        <img src={post?.user?.profilePicture} alt='profile of user' width={70} height={80}/>

        <p><Link to={`user/${post.user.id}`}> User: {post?.user?.username} </Link> </p>
        <h5>Content: {post.content}</h5>
        <hr/>
        </>
    )

}
export default Post;