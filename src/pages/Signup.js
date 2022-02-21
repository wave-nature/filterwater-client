import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Input from "../components/Input/Input";
import Modal from "../components/UI/Modal";
import { userSignupAction } from "../actions/userAction";
import Loader from "../components/Loader/Loader";
class Signup extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    wardNumber: "",
    password: "",
    passwordConfirm: "",
    modal: true,
    role: "",
  };

  roleHandler = (id) => {
    this.setState({
      modal: false,
      role: id,
    });
  };
  onChangeHandler = (id, value) => {
    let key = id;
    let newValue = value;
    if (key === "10L") newValue = 10;
    if (key === "20L") newValue = 20;
    if (key === "10L" || key === "20L") {
      key = "connectionFor";
    }

    const prevState = { ...this.state };
    prevState[key] = newValue;
    this.setState({ ...prevState });
  };
  formSubmitHandler = (e) => {
    e.preventDefault();
    const { signupRequest } = this.props;
    const data = { ...this.state };
    delete data["modal"];
    signupRequest(data);
  };

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    const data = this.props?.data;
    if (prevProps.data.success !== data.success) {
      Cookies.set("token", data.successResponse.token);
      localStorage.setItem("user", JSON.stringify(data.successResponse.user));
      toast.success("Signed up successfully!");
      history.push("/user");
    }
    if (data.error !== prevProps.data.error) {
      toast.error(data.error?.message);
    }
  }

  render() {
    return (
      <>
        {this.state.modal ? (
          <section className="flex flex-col items-center">
            <Modal roleHandle={(id) => this.roleHandler(id)} />
          </section>
        ) : this.props.data.loading ? (
          <Loader loading={this.props.data.loading} />
        ) : (
          <section
            id="signup"
            className="flex flex-col items-center pb-4 mt-4 "
          >
            <h3 className="mb-2 text-2xl border-b-2 border-gray-400">Signup</h3>
            <p className="text-xl">
              Please fill this form to create new account! or if you already
              have one then login.
            </p>

            <form
              action=""
              className="w-5/12 p-4 m-4 rounded shadow-sm bg-slate-100"
              onSubmit={this.formSubmitHandler}
            >
              <Input
                title="Name"
                placeholder="Your Name"
                id="name"
                htmlFor="name"
                type="text"
                isRequired={true}
                onChange={(id, value) => this.onChangeHandler(id, value)}
              />
              <Input
                title="Email"
                placeholder="Your Email"
                id="email"
                htmlFor="email"
                type="email"
                isRequired={true}
                onChange={(id, value) => this.onChangeHandler(id, value)}
              />
              <Input
                title="Mobile"
                placeholder="Your Mobile Number"
                id="mobile"
                htmlFor="mobile"
                type="text"
                isRequired={true}
                onChange={(id, value) => this.onChangeHandler(id, value)}
              />
              <Input
                title="Address"
                placeholder="Your Address"
                id="address"
                htmlFor="address"
                type="text"
                isRequired={true}
                onChange={(id, value) => this.onChangeHandler(id, value)}
              />
              <Input
                title="Ward Number"
                placeholder="Enter your ward number"
                id="wardNumber"
                htmlFor="wardNumber"
                type="number"
                isRequired={true}
                onChange={(id, value) => this.onChangeHandler(id, value)}
              />
              {this.state.role === "user" && (
                <div className="flex items-center justify-between">
                  <Input
                    title="10L"
                    type="radio"
                    id="10L"
                    htmlFor="10L"
                    isRequired
                    name="connectionFor"
                    onChange={(id, value) => this.onChangeHandler(id, value)}
                  />
                  <Input
                    title="20L"
                    type="radio"
                    id="20L"
                    htmlFor="20L"
                    isRequired
                    name="connectionFor"
                    onChange={(id, value) => this.onChangeHandler(id, value)}
                  />
                </div>
              )}

              <Input
                title="Password"
                placeholder="********"
                type="password"
                id="password"
                htmlFor="password"
                isRequired={true}
                onChange={(id, value) => this.onChangeHandler(id, value)}
              />
              <Input
                title="Confirm Password"
                placeholder="********"
                type="password"
                id="passwordConfirm"
                htmlFor="passwordConfirm"
                isRequired={true}
                onChange={(id, value) => this.onChangeHandler(id, value)}
              />
              <div className="flex justify-between">
                <button className="btn-primary">Signup</button>
                <div>
                  <span>Already have an account </span>
                  <span>
                    <Link to="/login" className="text-xl text-blue-600">
                      Login
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

const mapStateToProps = (state) => {
  return {
    data: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupRequest: (data) => dispatch(userSignupAction(data)),
  };
};
Signup.propTypes = {
  data: PropTypes.object,
  signupRequest: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
