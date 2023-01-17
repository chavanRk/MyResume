import React, { useEffect } from "react";

function About() {
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
      <section class="about">
        <div id="particles-js"></div>

        <h1 class="heading">
          {" "}
          about <span>me</span>{" "}
        </h1>

        <div class="image">
          <img src="/Images/me.jpg" alt="" />
        </div>

        <div class="row">
          <div class="info-container">
            <h1>Personal info</h1>

            <div class="box-container">
              <div class="box">
                <h3>
                  {" "}
                  <span>Name : </span> Rohitkumar Chavan{" "}
                </h3>
                <h3>
                  {" "}
                  <span>Age : </span> 25{" "}
                </h3>
                <h3>
                  {" "}
                  <span>Email : </span> chavanrohit413@gmail.com{" "}
                </h3>
                <h3>
                  {" "}
                  <span>Address : </span> Pune, India - 411016{" "}
                </h3>
              </div>

              <div class="box">
                <h3>
                  {" "}
                  <span>Skill : </span> full-stack{" "}
                </h3>
                <h3>
                  {" "}
                  <span>Experience : </span> 4 Months{" "}
                </h3>
                <h3>
                  {" "}
                  <span>Language : </span> English, Hindi, Marathi{" "}
                </h3>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1fios8I5Vp2l_DjFfyWfAy0FVl88Buwa2/view?usp=sharing"
              target="_blank"
              class="btn"
            >
              {" "}
              Download CV <i class="fas fa-download"></i>{" "}
            </a>
          </div>

          <div class="count-container">
            <div class="box">
              <h3>4</h3>
              <p>Months of experience</p>
            </div>

            <div class="box">
              <h3>10+</h3>
              <p>project completed</p>
            </div>
          </div>
        </div>
      </section>

      <section class="skills">
        <h1 class="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="images/icon-1.png" />
            <h3>html</h3>
          </div>
          <div class="box">
            <img src="images/icon-2.png" />
            <h3>css</h3>
          </div>
          <div class="box">
            <img src="images/icon-3.png" />
            <h3>javascript</h3>
          </div>
          <div class="box">
            <img src="images/icon-6.png" />
            <h3>react.js</h3>
          </div>
          <div class="box">
            <img src="images/icon-7.png" />
            <h3>Node js</h3>
          </div>
          <div class="box">
            <img src="images/icon-8.png" />
            <h3>BootStrap</h3>
          </div>
          <div class="box">
            <img src="images/icon-9.png" />
            <h3>Material UI</h3>
          </div>
          <div class="box">
            <img src="images/icon-10.png" />
            <h3>Mongo Db</h3>
          </div>
          <div class="box">
            <img src="images/icon-11.png" />
            <h3>Mysql</h3>
          </div>
          <div class="box">
            <img src="images/icon-12.png" />
            <h3>Java</h3>
          </div>
        </div>
      </section>

      <section class="education">
        <h1 class="heading">
          {" "}
          <span>my</span> education{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2013</span>
            <h3>Class X</h3>
            <p>Navabharat Vidyalaya Darfal(Sina)</p>
            <p>Percentage: 93%</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2015</span>
            <h3>Class XII</h3>
            <p>Walchand College Solapur (PCMB)</p>
            <p>Percentage: 66.6%</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2015 - 2019</span>
            <h3>Mechanical Engineering</h3>
            <p>JSPM's Rajarshi Shahu College Of Engineering, Pune</p>
            <p>CGPA: 7.75</p>
          </div>
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>Mar-2022 - Sep-2022</span>
            <h3>PG-DAC</h3>
            <p>CDAC KP Banglore</p>
          </div>
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>Oct-2022 - Current</span>
            <h3>Associate Software Engineer Intern</h3>
            <p>Refactor Academy, Bengaluru</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
