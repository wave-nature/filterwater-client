import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import Options from "../components/UI/Options";
import Service from "../components/UI/Service";
import Contact from "../components/UI/Contact";
import Footer from "../components/UI/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <Options />
        <Service />
        <Contact />
      </>
    );
  }
}

export default Home;
