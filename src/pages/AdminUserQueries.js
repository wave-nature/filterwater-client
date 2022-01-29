import React, { Component } from "react";
import QueryBox from "../components/Admin/QueryBox";
import Sidebar from "../components/Sidebar/Sidebar";

class AdminUserQueries extends Component {
  render() {
    return (
      <section className="flex justify-between h-screen -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 h-full mt-10 ml-4 ">
          <h2 className="">All Queries</h2>
          <QueryBox />
        </div>
      </section>
    );
  }
}

export default AdminUserQueries;
