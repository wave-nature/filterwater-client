import React, { Component } from "react";
import CalenderBox from "../components/Calender/CalenderBox";
import Invoice from "../components/Invoice/Invoice";
import Sidebar from "../components/Sidebar/Sidebar";
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
  }

  render() {
    return (
      <section className="flex justify-between -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 mt-10 ml-4">
          <div className="mb-4 text-2xl font-bold">
            This is monthly status of your connection
          </div>

          <div className="self-start mb-4 text-xl font-semibold">
            {this.date.toLocaleDateString("en", { month: "long" })}{" "}
            {this.date.getFullYear()}
          </div>

          <div className="flex flex-wrap">
            {this.state.days.map((val) => (
              <CalenderBox key={val} day={val} />
            ))}
          </div>
          <Invoice date={this.date} days={this.state.days} />
        </div>
      </section>
    );
  }
}

export default UserDashboard;
