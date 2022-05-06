import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import QueryBox from "../components/Admin/QueryBox";
import Sidebar from "../components/Sidebar/Sidebar";
import { deleteQueryAction, myQueriesAction } from "../actions/queryAction";
import Loader from "../components/Loader/Loader";

class UserQueries extends Component {
  state = {
    deleteThatQuery: false,
  };

  componentDidMount() {
    const token = Cookies.get("token");
    const { fetchMyQueries } = this.props;
    fetchMyQueries(token);
  }

  componentDidUpdate(prevProps) {
    const token = Cookies.get("token");
    const { myQueries, fetchMyQueries } = this.props;

    if (
      myQueries?.success !== prevProps?.queries?.success &&
      this.state.deleteThatQuery
    ) {
      fetchMyQueries(token);
      this.setState({ deleteThatQuery: false });
    }
  }
  deleteQueryHandler(id) {
    const token = Cookies.get("token");
    const { deleteQuery } = this.props;
    deleteQuery(id, token);
    this.setState({ deleteThatQuery: true });
  }

  render() {
    const { myQueries } = this.props;
    const {
      loading = false,
      succesResponse = {},
      error = null,
    } = myQueries && myQueries;
    return (
      <section className="flex justify-between h-screen -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 h-full mt-10 ml-4 overflow-y-scroll ">
          <h2 className="">All Queries</h2>

          {loading ? (
            <Loader loading />
          ) : (
            succesResponse &&
            succesResponse.queries?.map((query) => {
              const { _id: id, title, message, solved, createdAt } = query;
              return (
                <QueryBox
                  key={id}
                  id={id}
                  title={title}
                  message={message}
                  solved={solved}
                  createdAt={createdAt}
                  deleteQuery={this.deleteQueryHandler.bind(this, id)}
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
  myQueries: state.query,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMyQueries: (token) => dispatch(myQueriesAction(token)),
  deleteQuery: (id, token) => dispatch(deleteQueryAction(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserQueries);
