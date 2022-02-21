import React, { Component } from "react";
import Hero from "../components/UI/Hero";
import Options from "../components/UI/Options";
import Service from "../components/UI/Service";
import Contact from "../components/UI/Contact";

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
