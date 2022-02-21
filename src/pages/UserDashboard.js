import React, { Component } from "react";
import { connect } from "react-redux";
import CalenderBox from "../components/Calender/CalenderBox";
import Invoice from "../components/Invoice/Invoice";
import Sidebar from "../components/Sidebar/Sidebar";
import { getMeAction, getUserAction } from "../actions/adminAction";
import Cookies from "js-cookie";
import UserBox from "../components/Admin/UserBox";
export class UserDashboard extends Component {
  constructor(props) {
    super();
    this.date = new Date();
    this.state = {
      days: [],
    };
  }

  componentDidMount() {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const month = this.date.getMonth();
    const year = this.date.getFullYear();
    if (year % 4 === 0) months[1] = 29;
    this.setState({
      days: new Array(months[month]).fill(1).map((val, i) => i + 1),
    });
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const id = this.props.match.params.id;
    const token = Cookies.get("token");
    const getUser = this.props.getUser;
    id && loggedInUser.role !== "user" && getUser(id, token);
  }

  render() {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const userData = this.props.userData?.successResponse?.user;
    return (
      <section className="flex justify-between -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 mt-10 ml-4">
          <div className="mb-4 text-2xl font-bold">
            This is monthly status of your connection
          </div>
          {(loggedInUser.role === "admin" ||
            loggedInUser.role === "super-admin") && (
            <UserBox
              id={userData?._id}
              userName={userData?.name}
              userImg
              connectionFor={userData?.connectionFor}
              status={userData?.deliveryStatus}
            />
          )}

          <div className="self-start mb-4 text-xl font-semibold">
            {this.date.toLocaleDateString("en", { month: "long" })}{" "}
            {this.date.getFullYear()}
          </div>
          <div className="flex flex-wrap">
            {this.state.days.map((val) => (
              <CalenderBox key={val} day={val} role={loggedInUser.role} />
            ))}
          </div>
          <Invoice date={this.date} days={this.state.days} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.admin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id, token) => dispatch(getUserAction(id, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
