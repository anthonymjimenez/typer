import PostList from "../containers/postlist";
import NewPosts from "../forms/newposts";

const Home = ({ setPosts, user, posts }) => {
  return (
    <div className="App">
      <header className="App-header">
        <NewPosts setPosts={setPosts} user={user} />
        <PostList posts={posts} user={user} />
      </header>
    </div>
  );
};

export default Home;
