import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUserQueries from "./pages/AdminUserQueries";
class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/user" component={UserDashboard} />
          <Route exact path="/user/profile" component={UserProfile} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/admin/queries" component={AdminUserQueries} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
