import React from "react";

const Contact = () => {
  return (
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
                <input type="text" name="name" id="name" placeholder="Name" />
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
  );
};

export default Contact;
