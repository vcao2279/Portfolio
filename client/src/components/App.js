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

          <section id="two">
            <h2>Recent Work</h2>
            <div class="row">
              <article class="col-6 col-12-xsmall work-item">
                <a href="images/fulls/01.jpg" class="image fit thumb">
                  <img src="images/thumbs/01.jpg" alt="" />
                </a>
                <h3>Project 1</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="images/fulls/02.jpg" class="image fit thumb">
                  <img src="images/thumbs/02.jpg" alt="" />
                </a>
                <h3>Project 2</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="images/fulls/03.jpg" class="image fit thumb">
                  <img src="images/thumbs/03.jpg" alt="" />
                </a>
                <h3>Project 3</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="images/fulls/04.jpg" class="image fit thumb">
                  <img src="images/thumbs/04.jpg" alt="" />
                </a>
                <h3>Project 4</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="images/fulls/05.jpg" class="image fit thumb">
                  <img src="images/thumbs/05.jpg" alt="" />
                </a>
                <h3>Project 5</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="images/fulls/06.jpg" class="image fit thumb">
                  <img src="images/thumbs/06.jpg" alt="" />
                </a>
                <h3>Project 6</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
            </div>
            <ul class="actions">
              <li>
                <a href="#" class="button">
                  Full Portfolio
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
