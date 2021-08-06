import PostList from '../containers/postlist';
import NewPosts from '../forms/newposts';

const Home = ({ setPosts, usersObject, user, posts}) => {
    return (
        <div className="App">
      <header className="App-header">
          <NewPosts setPosts={setPosts} usersObject={usersObject} user={user}/>
          <PostList posts={posts}/>
      </header>
    </div>
    )
}

export default Home;