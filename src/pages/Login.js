import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "../components/Input/Input";
import { userLoginAction } from "../actions/userAction";
import Loader from "../components/Loader/Loader";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onchangeHandler = (key, value) => {
    const oldSate = { ...this.state };
    oldSate[key] = value;
    this.setState({ ...oldSate });
  };

  loginHandler = (e) => {
    e.preventDefault();
    const loginRequest = this.props.loginRequest;
    loginRequest(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    const { data, history } = this.props;
    if (data.success !== prevProps.data.success) {
      Cookies.set("token", data.successResponse.token);
      localStorage.setItem("user", JSON.stringify(data.successResponse.user));
      history.push("/user");
    }
  }

  render() {
    const { data } = this.props;
    return (
      <>
        {data.loading ? (
          <Loader loading={data.loading} />
        ) : (
          <section id="login" className="flex flex-col items-center pb-4 mt-4 ">
            <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Login</h3>
            <p className="text-xl">
              Please fill this form to login in your account! or if you don'
              have one then create account.
            </p>

            <form
              action=""
              className="w-5/12 p-4 m-4 rounded shadow-sm bg-slate-100"
              onSubmit={this.loginHandler}
            >
              <Input
                title="Email"
                placeholder="Your Email"
                id="email"
                htmlFor="email"
                type="email"
                isRequired={true}
                onChange={(id, value) => {
                  this.onchangeHandler(id, value);
                }}
              />
              <Input
                title="Password"
                placeholder="********"
                id="password"
                htmlFor="password"
                type="password"
                isRequired={true}
                onChange={(id, value) => {
                  this.onchangeHandler(id, value);
                }}
              />
              <div className="flex justify-between">
                <button className="btn-primary">Login</button>
                <div>
                  <span>Forgot Password </span>
                  <span>
                    <Link
                      to="/forgot-password"
                      className="text-xl text-blue-600"
                    >
                      Forgot Password
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  loginRequest: (data) => dispatch(userLoginAction(data)),
});

Login.propTypes = {
  data: PropTypes.object,
  loginRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
