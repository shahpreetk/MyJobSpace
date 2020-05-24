import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { resourceslink } from "./resourceslink";
import "tachyons";
import "./App.css";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      resourceslink: resourceslink,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredresources = this.state.resourceslink.filter((resource) => {
      return (resource.description
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase()) ||
        resource.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        resource.category
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        resource.validity
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        resource.link
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()))
    });

    return (
      <div className="tc">
        <header className="sticky" style={{ borderBottom: "3px solid black" }}>
          <h1 className="pa2 mt2 ml1 mr1 title-text f2">
            MyJob Space
          </h1>
          <p className="pa2 ma2 fw3 description-text">
            MyJob.Space is a Job Board. Search Company Name, Job Role, Posted On, Location of the job, etc.. to find relevant cards/links.
          </p>
          <SearchBox searchChange={this.onSearchChange} />
          <p className="last-modified-para">Last Modified On: 24th May 2020</p>
          <CookieConsent>This website uses cookies to enhance the user experience.{" "}
          <br />
          <span style={{ fontSize: "12px" }}>By default you agree to Google Analytics T&C.</span>{" "}
          <span style={{ fontSize: "10px" }}>Please do accept :O</span></CookieConsent>
          <h5>{filteredresources.length} job(s) found</h5>
        </header>
        <div style={{ borderTop: "5px solid black" }} className="pa3">
          <CardList resourceslink={filteredresources} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
