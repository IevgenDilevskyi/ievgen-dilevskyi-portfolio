import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SinglePost from "./components/pages/SinglePost";
import Post from "./components/pages/Post";
import Project from "./components/pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />

      </Switch>
    </BrowserRouter>
  )
}

export default App;
