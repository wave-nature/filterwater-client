import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import CalenderBox from "../components/Calender/CalenderBox";
import Invoice from "../components/Invoice/Invoice";
import Sidebar from "../components/Sidebar/Sidebar";
import { getUserAction } from "../actions/adminAction";
import Cookies from "js-cookie";
import UserBox from "../components/Admin/UserBox";
import Loader from "../components/Loader/Loader";
import {
  getMyDeliveryAction,
  getUserDeliveryAction,
} from "../actions/deliveryAction";
import { createQueryAction } from "../actions/queryAction";
import Input from "../components/Input/Input";
import { toast } from "react-toastify";
export class UserDashboard extends Component {
  constructor(props) {
    super();
    this.date = new Date();
    this.state = {
      days: [],
      loadView: true,
      modal: false,
      queryTitle: "",
      queryDescription: "",
      invalidQuery: false,
    };
  }

  componentDidMount() {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    this.setState({ loadView: false });

    const month = this.date.getMonth();
    const year = this.date.getFullYear();
    if (year % 4 === 0) months[1] = 29;
    this.setState({
      days: new Array(months[month]).fill(1).map((val, i) => i + 1),
    });
    const id = this.props.match.params.id; //user id
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const token = Cookies.get("token");
    const getUser = this.props.getUser;
    const getDelivery = this.props.getDelivery;
    const getUserDelivery = this.props.getUserDelivery;
    if (id && loggedInUser.role !== "user") getUser(id, token);
    if (id && loggedInUser.role !== "user") getUserDelivery(id, token);
    if (loggedInUser.role === "user") getDelivery(token);
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props;
    const { success, error } = query && query;

    const id = this.props.match.params.id; //user id
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const token = Cookies.get("token");
    const getUser = this.props.getUser;
    const getUserDelivery = this.props.getUserDelivery;
    const { deliveryData } = this.props;
    if (
      prevProps.deliveryData?.successResponse?.deliveries?.length !==
      deliveryData?.successResponse?.deliveries?.length
    ) {
      if (id && loggedInUser.role !== "user") getUser(id, token);
      if (id && loggedInUser.role !== "user") getUserDelivery(id, token);
    }

    if (success !== prevProps?.query?.success) {
      if (success) {
        toast.success("Your Issue successfully sent!");
        this.setState({ modal: false });
      }
      if (error) toast.error(error?.message?.toString().slice(0, 20));
    }
  }

  showModalHandler() {
    this.setState({ modal: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  submitQueryHandler(e) {
    e.preventDefault();
    const { queryTitle, queryDescription } = this.state;
    const { createQuery } = this.props;
    if (queryTitle.length === 0 || queryDescription.length === 0) {
      this.setState({ invalidQuery: true });
      return;
    }
    if (this.state.invalidQuery) {
      this.setState({ invalidQuery: false });
    }

    const data = {
      title: queryTitle,
      message: queryDescription,
    };

    const token = Cookies.get("token");

    createQuery(data, token);
    this.setState({ modal: false });
  }

  cancelQueryHandler() {
    this.setState({ modal: false });
    this.setState({ invalidQuery: false });
  }

  queryModal() {
    const { query } = this.props;
    const loading = query && query.loading;
    const querySubjectChange = (id, value) => {
      this.setState((prev) => ({ ...prev, queryTitle: value }));
    };

    const queryDescriptionChange = (id, value) => {
      this.setState((prev) => ({ ...prev, queryDescription: value }));
    };

    return (
      <>
        <div className="flex flex-col w-1/2 px-8 py-4 bg-gray-200 shadow-lg">
          <form onSubmit={this.submitQueryHandler.bind(this)}>
            <Input
              title="Query Subject"
              id="query-title"
              htmlFor="query-title"
              // isRequired
              placeholder="Query Subject"
              type="text"
              onChange={querySubjectChange}
            />
            <Input
              title="Query Description"
              id="query-description"
              htmlFor="query-description"
              // isRequired
              onChange={queryDescriptionChange}
              placeholder="Query Description"
              type="textarea"
            />
            <div className="flex justify-between w-full">
              <button
                onClick={this.cancelQueryHandler.bind(this)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button className="btn-primary">Submit</button>
            </div>
          </form>
          {loading && <Loader loading />}
        </div>
      </>
    );
  }

  mainContent() {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const userData = this.props.userData?.successResponse?.user;
    const deliveryData =
      this.props.deliveryData?.successResponse?.deliveries || [];
    const loading = this.props.deliveryData?.loading;
    return (
      <>
        <div className="mb-4 text-2xl font-bold">
          This is monthly status of your connection
        </div>
        {(loggedInUser.role === "admin" ||
          loggedInUser.role === "super-admin") &&
          (loading ? (
            <Loader loading />
          ) : (
            <UserBox
              id={userData?._id}
              userName={userData?.name}
              userImg
              role={userData?.role}
              connectionFor={userData?.connectionFor}
              status={userData?.deliveryStatus}
            />
          ))}

        <div className="self-start mb-4 ml-8 text-xl font-semibold">
          {this.date.toLocaleDateString("en", { month: "long" })}{" "}
          {this.date.getFullYear()}
        </div>
        {loading ? (
          <Loader loading />
        ) : (
          <div className="flex flex-wrap ml-8">
            {this.state.days.map((val) => {
              const delivery = deliveryData?.find((el) => {
                const deliveredDay = new Date(el.createdAt).getDate(); //delivered day
                const deliveryMonth = new Date(el.createdAt).getMonth(); //delivered month
                return (
                  deliveredDay === val &&
                  !el.extra &&
                  deliveryMonth === this.date.getMonth()
                );
              });
              const delivered = delivery?.delivered;
              const createdAt = delivery?.createdAt;

              return (
                <CalenderBox
                  key={val}
                  day={val}
                  role={loggedInUser.role}
                  delivered={delivered}
                  createdAt={createdAt}
                />
              );
            })}
          </div>
        )}
        {loading ? (
          <Loader loading />
        ) : (
          <Invoice
            date={this.date}
            days={this.state.days}
            deliveries={deliveryData && deliveryData}
            connectionFor={
              userData?.connectionFor || loggedInUser.connectionFor
            }
            role={loggedInUser.role}
            showModal={() => this.showModalHandler()}
          />
        )}
      </>
    );
  }

  render() {
    if (this.state.invalidQuery) toast.error("Invalid Query Details");
    return (
      <section className="flex justify-between -mt-10">
        {this.state.modal ? (
          <div className="flex flex-col items-center w-full mt-28">
            {this.queryModal()}
          </div>
        ) : (
          <>
            <Sidebar />
            <div className="flex flex-col items-center w-3/4 mt-10 ml-4">
              {this.mainContent()}
            </div>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.admin,
    deliveryData: state.delivery,
    query: state.query,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id, token) => dispatch(getUserAction(id, token)),
    getDelivery: (token) => dispatch(getMyDeliveryAction(token)),
    getUserDelivery: (id, token) => dispatch(getUserDeliveryAction(id, token)),
    createQuery: (data, token) => dispatch(createQueryAction(data, token)),
  };
};

UserDashboard.proptype = {
  userData: Proptypes.object.isRequired,
  getUser: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
