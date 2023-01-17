import React from "react";

function Portfolio() {
  return (
    <>
      <section class="portfolio">
        <h1 class="heading">
          {" "}
          <span>my</span> work{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="/Images/scr1.jpg" alt="" />
            <div class="content">
              <h3>project 01</h3>
              <p>MovieApp, Redux toolkit</p>
              <a
                target="_blank"
                href="https://movieapp-redux-toolkit.netlify.app"
              >
                OPEN
              </a>
            </div>
          </div>

          <div class="box">
            <img src="/Images/scr2.jpg" alt="" />
            <div class="content">
              <h3>project 02</h3>
              <p>E-commerce FakeStoreApi</p>
              <a target="_blank" href="https://redux-e-comm.netlify.app">
                OPEN
              </a>
            </div>
          </div>

          <div class="box">
            <img src="/Images/scr3.jpg" alt="" />
            <div class="content">
              <h3>project 03</h3>
              <p>Pokemon</p>
              <a target="_blank" href="https://pokemon-api-rdc.netlify.app">
                OPEN
              </a>
            </div>
          </div>

          <div class="box">
            <img src="/Images/scr4.jpg" alt="" />
            <div class="content">
              <h3>project 04</h3>
              <p>React Chat App</p>
              <a target="_blank" href="https://react-chat-app-rdc.netlify.app">
                OPEN
              </a>
            </div>
          </div>

          <div class="box">
            <img src="/Images/scr5.jpg" alt="" />
            <div class="content">
              <h3>project 05</h3>
              <p>Career App</p>
              <a target="_blank" href="https://career-app-firebase.netlify.app">
                OPEN
              </a>
            </div>
          </div>
          <div class="box">
            <img src="/Images/scr6.jpg" alt="" />
            <div class="content">
              <h3>project 06</h3>
              <p>WhatsApp</p>
              <a
                target="_blank"
                href="https://whatsapp-firebase-clone.netlify.app"
              >
                OPEN
              </a>
            </div>
          </div>
          <div class="box">
            <img src="/Images/scr8.jpg" alt="" />
            <div class="content">
              <h3>project 07</h3>
              <p>TikTok</p>
              <a target="_blank" href="https://tiktok-mern-rdc.netlify.app">
                OPEN
              </a>
            </div>
          </div>
          <div class="box">
            <img src="/Images/scr7.jpg" alt="" />
            <div class="content">
              <h3>project 08</h3>
              <p>Tinder</p>
              <a target="_blank" href="https://tinder-mern-rdc.netlify.app">
                OPEN
              </a>
            </div>
          </div>
          <div class="box">
            <img src="/Images/scr9.jpg" alt="" />
            <div class="content">
              <h3>project 09</h3>
              <p>E-Com HooksBased</p>
              <a
                target="_blank"
                href="https://fakestoreapi-hooksbased.netlify.app">
                OPEN
              </a>
            </div>
          </div>
          <div class="box">
            <img src="/Images/scr10.jpg" alt="" />
            <div class="content">
              <h3>project 10</h3>
              <p> Myself </p>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
