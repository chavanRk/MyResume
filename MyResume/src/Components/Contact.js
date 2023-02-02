import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/app.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const scripts = document.createElement("script");
    scripts.src = "/particles.min.js";
    scripts.async = true;
    document.body.appendChild(scripts);
    return () => {
      document.body.removeChild(scripts);
    };
  }, []);
  return (
    <>
      <section className="contact">
        <div id="particles-js"></div>

        <h1 className="heading">
          {" "}
          contact <span>me</span>{" "}
        </h1>

        <div className="image">
          <img src="/Images/me.jpg" alt="" />
        </div>

        <div className="row">
          <div className="info-container">
            <h1>get in touch</h1>

            <p>Feel free to contact</p>

            <div className="box-container">
              <div className="box">
                <i className="fas fa-phone"></i>
                <div className="info">
                  <h3>number :</h3>
                  <p>+91 8600842880</p>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <h3>email :</h3>
                  <p>chavanrohit413@gmail.com</p>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-map"></i>
                <div className="info">
                  <h3>address :</h3>
                  <p>Pune, India - 411016</p>
                </div>
              </div>
            </div>

            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a
                href="https://github.com/chavanRk/MyProjects"
                target="_blank"
                className="fab fa-github"
              ></a>
              <a
                href="https://www.linkedin.com/in/rohit-chavan-bab2201b4/"
                target="_blank"
                className="fab fa-linkedin"
              ></a>
            </div>
          </div>

          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="your name" />
              <input type="number" placeholder="your number" />
            </div>

            <div className="inputBox">
              <input type="email" placeholder="your email" />
              <input type="text" placeholder="your subject" />
            </div>

            <textarea
              name=""
              placeholder="your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" value="send message" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
