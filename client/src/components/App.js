import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <div id="main">
          <section id="one">
            <header class="major">
              <h2>About Me</h2>
            </header>
            <p>
              Hello, I'm Vu, a software developer from Orange County,
              California. I love tackling challenges and finding solutions to
              complex problems. MY passion is to create apps that make positive
              impacts on others.
            </p>
            <ul class="actions">
              <li>
                <a href="#" class="button">
                  My Resume
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
