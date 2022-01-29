import React, { Component } from "react";
import CalenderBox from "../components/Calender/CalenderBox";
import Invoice from "../components/Invoice/Invoice";
import Sidebar from "../components/Sidebar/Sidebar";
export class UserDashboard extends Component {
  render() {
    return (
      <section className="flex justify-between -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 mt-10 ml-4">
          <div className="mb-4 text-2xl font-bold">
            This is monthly status of your connection
          </div>

          <div className="self-start mb-4 text-xl font-semibold">
            September 2021
          </div>

          <div className="flex flex-wrap">
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
            <CalenderBox />
          </div>
          <Invoice />
        </div>
      </section>
    );
  }
}

export default UserDashboard;
