import PostList from "../containers/postlist";
import NewPosts from "../form/newposts";

const Home = ({ setPosts, user, posts, usersObject }) => {
  return (
    <div className="App">
      <header className="App-header">
        <NewPosts setPosts={setPosts} user={user} />
        <PostList
          posts={posts}
          user={user}
          setPosts={setPosts}
          usersObject={usersObject}
        />
      </header>
    </div>
  );
};

export default Home;
