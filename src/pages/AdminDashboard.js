import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import FilterOptions from "../components/Admin/FilterOptions";
import Paginate from "../components/Admin/Paginate";
import UserBox from "../components/Admin/UserBox";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAllUsersAction } from "../actions/adminAction";
import Loader from "../components/Loader/Loader";

class AdminDashboard extends Component {
  state = { user: {}, query: "" };
  componentDidMount() {
    const { getAllUsers, loggedInUser } = this.props;
    const query = this.state.query;
    const token = loggedInUser.successResponse.token || Cookies.get("token");
    getAllUsers(query, token);
  }

  selectFilterHandler = (filter) => {
    const { getAllUsers, loggedInUser } = this.props;
    const token = loggedInUser.successResponse.token || Cookies.get("token");
    getAllUsers(filter, token);
  };

  render() {
    const allUsers = this.props.adminUser?.successResponse?.users;
    const loading = this.props.adminUser?.loading;

    return (
      <section className="flex justify-between h-screen -mt-10">
        <Sidebar />

        <div className="flex flex-col items-center w-3/4 h-full mt-10 ml-4">
          <h2 className="">All Connected Users</h2>
          <FilterOptions
            selectFilter={(filter) => this.selectFilterHandler(filter)}
          />
          {loading ? (
            <Loader loading={loading} />
          ) : (
            allUsers &&
            allUsers?.map((user) => (
              <UserBox
                key={user._id}
                id={user._id}
                role={user.role}
                userName={user.name}
                userImg={user.photo}
                connectionFor={user.connectionFor}
                status={user.deliveryStatus}
              />
            ))
          )}

          {allUsers && allUsers?.length === 0 && <p>No user found 🙄</p>}
          {allUsers?.length > 0 && <Paginate />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.user,
  adminUser: state.admin,
});
const mapDispatchToProps = (dispatch) => ({
  getAllUsers: (query, token) => dispatch(getAllUsersAction(query, token)),
});

AdminDashboard.propTypes = {
  getAllUsers: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
