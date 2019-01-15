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

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p>
          <div class="row">
            <div class="col-8 col-12-small">
              <form method="post" action="#">
                <div class="row gtr-uniform gtr-50">
                  <div class="col-6 col-12-xsmall">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-6 col-12-xsmall">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    />
                  </div>
                </div>
              </form>
              <ul class="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </div>
            <div class="col-4 col-12-small">
              <ul class="labeled-icons">
                <li>
                  <h3 class="icon fa-home">
                    <span class="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 class="icon fa-mobile">
                    <span class="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 class="icon fa-envelope-o">
                    <span class="label">Email</span>
                  </h3>
                  <a href="#">hello@untitled.tld</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
