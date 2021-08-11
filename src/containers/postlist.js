import Post from "../components/post";
const PostList = ({ posts, user, setPosts }) => {
  return (
    <div>
      <h3> Recent posts! </h3>
      {posts.map((post) => (
        <div>
          <Post post={post} user={user} setPosts={setPosts} key={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
