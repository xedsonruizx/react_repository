// pages/Home.js

import React from "react";
import Vanilla from "../proyects/Vanilla";
const Proyects = () => (
  <div>
    <div className="text-center justify-content-center d-flex ">
      <div className="contener bg-blue fade-out">
        <div className="presentation-proyects py-5 text-wrap  ">
          <h1 className="fw-bolder  lh-2">My proyects</h1>
          <div>
            This section belong to all my proyect which I have been working in my
            free time as a form of study
          </div>
          <div>
            {" "}
            Improving my skill mainly as a{" "}
            <strong>
              {" "}
              <u>Front End Developer</u>
            </strong>
          </div>
          <span className="fw-bolder">
            Technologies like: html, css, js, php laravel
            <div> vue js and react </div>
          </span>
        </div>
      </div>
    </div>
     <Vanilla></Vanilla>
  </div>
);

export default Proyects;
