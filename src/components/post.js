const Post = ({post}) => {
    return (
        <>
        <img src={post?.user?.profilePicture} alt='profile of user' width={70} height={80}/>

        <p>User: {post?.user?.username} </p>
        <h5>Content: {post.content}</h5>
        <hr/>
        </>
    )

}
export default Post;