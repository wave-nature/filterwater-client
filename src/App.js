import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUserQueries from "./pages/AdminUserQueries";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  render() {
    const { data } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    const userInfo = data.successResponse?.user;

    return (
      <Switch>
        <Layout>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            draggable
            pauseOnHover
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          {userInfo || user ? (
            <Route exact path="/user" component={UserDashboard} />
          ) : (
            <Redirect to="/" />
          )}
          {userInfo || user ? (
            <Route exact path="/myprofile" component={UserProfile} />
          ) : (
            <Redirect to="/" />
          )}
          {(userInfo && userInfo.role === "admin") ||
          (user && (user.role === "admin" || user.role === "super-admin")) ? (
            <Route exact path="/admin" component={AdminDashboard} />
          ) : (
            <Redirect to="/" />
          )}
          {(userInfo && userInfo.role === "admin") ||
          (user && user.role === "admin") ? (
            <Route exact path="/admin/queries" component={AdminUserQueries} />
          ) : (
            <Redirect to="/" />
          )}
          {(userInfo &&
            (userInfo.role === "admin" || userInfo.role === "super-admin")) ||
          (user && (user.role === "admin" || user.role === "super-admin")) ? (
            <Route exact path="/user/:id" component={UserDashboard} />
          ) : (
            <Redirect to="/" />
          )}
        </Layout>
      </Switch>
    );
  }
}
const mapStateToProps = (state) => ({ data: state.user });
export default connect(mapStateToProps)(App);
