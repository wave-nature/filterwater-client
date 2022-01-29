import React, { Component } from "react";
import FilterOptions from "../components/Admin/FilterOptions";
import Paginate from "../components/Admin/Paginate";
import UserBox from "../components/Admin/UserBox";
import Sidebar from "../components/Sidebar/Sidebar";

class AdminDashboard extends Component {
  render() {
    return (
      <section className="flex justify-between h-screen -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 h-full mt-10 ml-4">
          <h2 className="">All Connected Users</h2>

          <FilterOptions />

          <UserBox />
          <UserBox />
          <UserBox />

          <Paginate />
        </div>
      </section>
    );
  }
}

export default AdminDashboard;
