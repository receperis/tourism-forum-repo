import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import './Css/style.css';

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/footer/Footer";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/home/HomePage";
import PostsPage from "./components/posts/PostsPage";
import CommentsPage from "./components/comments/CommentsPage";
import CommentPageDetails from "./components/comments/CommentPageDetails";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/comments">
            <CommentsPage />
          </Route>

          <Route path="/comments/:id">
            <CommentPageDetails />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
