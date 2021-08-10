import Post from '../components/post';
const PostList = ({ posts }) => {
    
    return (
        <>
        <h3> Recent posts! </h3>
        {
        posts.map(post =>
        <>
        <Post post={post}/>
        </>
    )}
    </>
    )}

export default PostList;