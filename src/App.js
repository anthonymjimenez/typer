import { useEffect, useState} from 'react';
import axios from "axios";
import Home from './views/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserPage from './views/user-page'

// next up is creating comments and likes. I'm going to embed the comments into the post document itself. This approach works slightly well with mongodb but if we end up using sql we can scrap it. Alot of the work I did 
// between line 11-33 was to create the relationships that ORM could do for us. However, not using a ORM is a totally viable approach as long as we can create relationships ourselves when querying the API. 
// this will be probably be pretty straightforward since the only 'gluing' we have to do is between posts and users. The relationship between posts,comments and likes could be self contained 
// ex.  "posts": [{"id": 1, "content": "Today was boring!", "likes": 0, "user_likes_ids": [], "user_id": 1, comments: [array of comments]}]



function App() {
  let [posts, setPosts] = useState([]);
  let [usersObject, setUsersObject] = useState({})
  let [user, setUser] = useState(2);
  useEffect(() => {
    const fetch = async () => {
      let req = await axios.get('http://localhost:3000/posts')
      let users = await axios.get('http://localhost:3000/users')
      let usersObject = {};
      users.data.forEach(user => 
        usersObject[user.id] = user
        )
      setUsersObject(usersObject);
      return { "posts": req, "usersObject": usersObject } 
    }

    fetch().then(data => {
      if(user) { // here checking if user is already logged in, eventually this would be replaced with cached data (maybe local storage) 
               //that remembers recent successful log ins, if no data is found then we could route our application to a guest landing page that requires users to sign up for account 
      setUser((userData) => 
        data.usersObject[userData]
      )
      }
      setPosts(data.posts.data.map(post => {
        return { user: data.usersObject[post.user_id], ...post}
      }))

      return data
    })
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
    <Switch>
    <Route path="/user/:id">
      <UserPage />
    </Route>
    <Route path="/">
      <Home setPosts={setPosts} usersObject={usersObject} user={user} posts={posts} />
    </Route>
  </Switch>
  </Router>
  );
}

export default App;
