import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SecondSlider = () => (
  <div className="carrousel-item">
    {/* <!-- first card --> */}
    <div className="card">
      <div className="elms-animation">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
      </div>
      <img src={require("../../assets/images/proyects/profile-card.png")} alt="" />
      <div className="content">
        <div className="d-block text-center">
          <div>
            <span className="text-white">
              <strong>Profile card with double background </strong> <div> HTML + CSS</div>
            </span>
          </div>
          <div className="my-3">
            {" "}
            <a
              href="https://github.com/xedsonruizx/Profile-card-component"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <AiFillGithub className=" fs-3" />
            </a>
          </div>
          <div>
            <a
              href="https://xedsonruizx.github.io/Profile-card-component/"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- second card --> */}
    <div className="card">
      <div className="elms-animation">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
      </div>
      <img
        src={require("../../assets/images/proyects/stats-card.png")}
        alt=""
      />
      <div className="content">
        <div className="d-block text-center">
          <div>
            <span className="text-white">
              <strong>Grid card with order </strong>
              <div> HTML + CSS</div>
            </span>
          </div>
          <div className="my-3">
            {" "}
            <a
              href="https://github.com/xedsonruizx/Stats-preview-card-component"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <AiFillGithub className=" fs-3" />{" "}
            </a>
          </div>
          <div>
            <a
              href="https://xedsonruizx.github.io/Stats-preview-card-component/"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- third card --> */}
    <div className="card">
      <div className="elms-animation">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
      </div>
      <img
        src={require("../../assets/images/proyects/none.jpg")}
        alt=""
      />

      <div className="content">
        <div className="d-block text-center">
          <div>
            <span className="text-white">
              <strong>Card </strong> <div> HTML + CSS</div>
            </span>
          </div>
          <div className="my-3">
            {" "}
            <a
              href="https://github.com/xedsonruizx/results-summary-challenge-3"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <AiFillGithub className=" fs-3" />{" "}
            </a>
          </div>
          <div>
            <a
              href="https://xedsonruizx.github.io/results-summary-challenge-3/"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- four card --> */}
    <div className="card">
      <div className="elms-animation">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
      </div>
      <img src={require("../../assets/images/proyects/none.jpg")} alt="" />

      <div className="content">
        <div className="d-block text-center">
          <div>
            <span className="text-white">
              <strong>Card</strong>{" "}
              <div> HTML + CSS</div>
            </span>
          </div>
          <div className="my-3">
            {" "}
            <a
              href="https://github.com/xedsonruizx/NFT-preview-card-component"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <AiFillGithub className=" fs-3" />{" "}
            </a>
          </div>
          <div>
            <a
              href="https://xedsonruizx.github.io/NFT-preview-card-component/"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- five card --> */}
    <div className="card">
      <div className="elms-animation">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
      </div>
      <img src={require("../../assets/images/proyects/none.jpg")} alt="" />

      <div className="content">
        <div className="d-block text-center">
          <div>
            <span className="text-white">
              <strong>Card</strong> <div> HTML + CSS</div>
            </span>
          </div>
          <div className="my-3">
            {" "}
            <a
              href="https://github.com/xedsonruizx/Order-summary-component"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <AiFillGithub className=" fs-3" />{" "}
            </a>
          </div>
          <div>
            <a
              href="https://xedsonruizx.github.io/Order-summary-component/"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- six card --> */}
    <div className="card">
      <div className="elms-animation">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
      </div>
      <img
        src={require("../../assets/images/proyects/none.jpg")}
        alt=""
      />

      <div className="content">
        <div className="d-block text-center">
          <div>
            <span className="text-white">
              <strong>Card</strong> <div> HTML + CSS Flex box</div>
            </span>
          </div>
          <div className="my-3">
            {" "}
            <a
              href="https://github.com/xedsonruizx/3-column-preview-card-component"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <AiFillGithub className=" fs-3" />{" "}
            </a>
          </div>
          <div>
            <a
              href="https://xedsonruizx.github.io/3-column-preview-card-component/"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SecondSlider;
