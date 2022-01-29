import React, { Component } from "react";
import Input from "../components/Input/Input";
import Sidebar from "../components/Sidebar/Sidebar";
import userPhoto from "../assets/icons/user.png";

class UserProfile extends Component {
  render() {
    return (
      <section className="flex justify-between -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 mt-10 ml-4">
          <div className="mb-4 text-2xl font-bold">Update Profile</div>
          <form action="" className="w-1/2 p-4 rounded bg-slate-100">
            <Input
              title="Name"
              id="name"
              htmlFor="name"
              isRequired
              type="text"
              value="Vivek Singh Bhadouria"
            />
            <Input
              title="Email"
              id="email"
              htmlFor="email"
              isRequired
              type="email"
              value="vivek@example.com"
            />
            <Input
              title="Mobile"
              id="mobile"
              htmlFor="mobile"
              isRequired
              type="text"
              value="9876543210"
            />

            <div className="flex items-center justify-between mt-4 mb-2">
              <label
                htmlFor="photo"
                className="p-2 border-2 border-blue-600 rounded-sm cursor-pointer"
                id="photo-label"
              >
                Upload new photo
              </label>
              <img
                src={userPhoto}
                alt=""
                className="w-20 h-20 cursor-pointer"
              />
              <input
                type="file"
                name="photo"
                id="photo"
                accept="image/*"
                className="hidden"
              />
            </div>

            <button className="btn-primary">Update Profile</button>
          </form>

          <div className="mb-4 text-2xl font-bold">Update Password</div>

          <form action="" className="w-1/2 p-4 mb-10 rounded bg-slate-100">
            <Input
              title="Current Password"
              id="password"
              htmlFor="password"
              isRequired
              type="password"
              placeholder="********"
            />
            <Input
              title="New Password"
              id="new-password"
              htmlFor="new-password"
              isRequired
              type="password"
              placeholder="********"
            />
            <Input
              title="Confirm Password"
              id="confirm-password"
              htmlFor="confirm-password"
              isRequired
              type="password"
              placeholder="********"
            />

            <button className="btn-primary">Update Password</button>
          </form>
        </div>
      </section>
    );
  }
}

export default UserProfile;
