import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import QueryBox from "../components/Admin/QueryBox";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  deleteQueryAction,
  getAllQueriesAction,
  updateQueryAction,
} from "../actions/queryAction";
import Loader from "../components/Loader/Loader";

class AdminUserQueries extends Component {
  state = {
    querySolved: false,
    deleteThatQuery: false,
  };

  componentDidMount() {
    const token = Cookies.get("token");
    const { fetchAllQueries } = this.props;
    fetchAllQueries(token);
  }

  componentDidUpdate(prevProps) {
    const token = Cookies.get("token");
    const { fetchAllQueries, queries } = this.props;
    if (
      queries.success !== prevProps.queries.success &&
      this.state.querySolved
    ) {
      setTimeout(() => {
        fetchAllQueries(token);
      }, 500);
      this.setState({ querySolved: false });
    }
    if (
      queries.success !== prevProps.queries.success &&
      this.state.deleteThatQuery
    ) {
      setTimeout(() => {
        fetchAllQueries(token);
      }, 500);
      this.setState({ deleteThatQuery: false });
    }
  }

  updateQueryHandler(id) {
    const token = Cookies.get("token");
    const { updateQuery } = this.props;
    updateQuery(id, token);
    this.setState({ querySolved: true });
  }

  deleteQueryHandler(id) {
    const token = Cookies.get("token");
    const { deleteQuery } = this.props;
    deleteQuery(id, token);
    this.setState({ deleteThatQuery: true });
  }

  render() {
    const { queries } = this.props;
    const { loading, succesResponse, error } = queries && queries;
    const token = Cookies.get("token");
    return (
      <section className="flex justify-between h-screen -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 h-full mt-10 ml-4 overflow-y-scroll ">
          <h2 className="">All Queries</h2>
          {succesResponse && succesResponse?.queries?.length === 0 && (
            <p>No queries found!</p>
          )}
          {loading ? (
            <Loader loading />
          ) : (
            succesResponse &&
            succesResponse.queries?.map((query) => {
              const {
                _id: id,
                user: { name, mobile, wardNumber, connectionFor },
                title,
                message,
                solved,
                createdAt,
              } = query;
              return (
                <QueryBox
                  key={id}
                  id={id}
                  userName={name}
                  mobile={mobile}
                  wardNumber={wardNumber}
                  connectionFor={connectionFor}
                  title={title}
                  message={message}
                  solved={solved}
                  createdAt={createdAt}
                  updateQuery={this.updateQueryHandler.bind(this, id)}
                  deleteQuery={this.deleteQueryHandler.bind(this, id)}
                  token={token}
                />
              );
            })
          )}
          {error && <p>{error.message}</p>}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  queries: state.query,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllQueries: (token) => dispatch(getAllQueriesAction(token)),
  updateQuery: (id, token) => dispatch(updateQueryAction(id, token)),
  deleteQuery: (id, token) => dispatch(deleteQueryAction(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserQueries);
