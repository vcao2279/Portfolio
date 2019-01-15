import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import PortfolioItems from "./PortfolioItems";
import Contact from "./Contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <div id="main">
          <About />
          <PortfolioItems />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
