import React from "react";
import Header from "../Header/Header";
import Footer from "../UI/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-10 ">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
