import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home_Component() {
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

  const opt = { loop: true };

  return (
    <>
      <section class="home">
        <div id="particles-js"></div>

        <div class="image">
          <img src="/Images/me.jpg" alt="" />
        </div>

        <div class="content">
          <h3>
            <span className="inf">
              <i class="fas fa-infinity"></i>{" "}
            </span>{" "}
          </h3>

          <h3>hi, i am Rohitkumar Chavan</h3>
          <span>Full-Stack developer</span>
          <p>
            I'm a Full Stack Developer from Pune, India. I have a passion for
            design and love for Web Developement.
          </p>
          <NavLink to="/about">
            <a href="#" class="btn">
              {" "}
              about me <i class="fas fa-user"></i>{" "}
            </a>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Home_Component;
