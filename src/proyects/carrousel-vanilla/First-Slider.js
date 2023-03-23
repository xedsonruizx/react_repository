import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const FirstSlider = () => (
  <div>
    <div className="carrousel-item">
      {/* <!-- first card --> */}
      <div className="card-2 card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img src={require("../../assets/images/proyects/qr.png")} alt="" />
        <div className="content">
          <div className="d-block text-center">
            <div>
              <span className="text-white">
                <strong>QR challenge </strong> <div> HTML + CSS</div>
              </span>
            </div>
            <div className="my-3">
              {" "}
              <a
                href="https://github.com/xedsonruizx/QrChallenge/tree/QR"
                target="_blank"
                className="text-decoration-none text-white"
              >
                <AiFillGithub className=" fs-3" />
              </a>
            </div>
            <div>
              <a
                href="https://xedsonruizx.github.io/QrChallenge/"
                target="_blank"
              >
                <button>Visualizar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- second card --> */}
      <div className="card-2 card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img
          src={require("../../assets/images/proyects/secondChallenge.png")}
          alt=""
        />
        <div className="content">
          <div className="d-block text-center">
            <div>
              <span className="text-white">
                <strong>Card Product </strong>
                <div> HTML + CSS</div>
              </span>
            </div>
            <div className="my-3">
              {" "}
              <a
                href="https://github.com/xedsonruizx/Product-preview-card-component"
                target="_blank"
                className="text-decoration-none text-white"
              >
                <AiFillGithub className=" fs-3" />{" "}
              </a>
            </div>
            <div>
              <a
                href="https://xedsonruizx.github.io/Product-preview-card-component/"
                target="_blank"
              >
                <button>Visualizar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- third card --> */}
      <div className="card-2 card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img
          src={require("../../assets/images/proyects/result-summary.png")}
          alt=""
        />

        <div className="content">
          <div className="d-block text-center">
            <div>
              <span className="text-white">
                <strong>Card Summary </strong> <div> HTML + CSS</div>
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
      <div className="card-2 card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img src={require("../../assets/images/proyects/ntf-card.png")} alt="" />

        <div className="content">
          <div className="d-block text-center">
            <div>
              <span className="text-white">
                <strong>NTF Card with hover animation</strong>{" "}
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
      <div className="card-2 card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img src={require("../../assets/images/proyects/music.png")} alt="" />

        <div className="content">
          <div className="d-block text-center">
            <div>
              <span className="text-white">
                <strong>Order-Card</strong> <div> HTML + CSS</div>
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
      <div className="card-2 card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img
          src={require("../../assets/images/proyects/3-cols-card.png")}
          alt=""
        />

        <div className="content">
          <div className="d-block text-center">
            <div>
              <span className="text-white">
                <strong>3 Columns Card</strong> <div> HTML + CSS Flex box</div>
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
  </div>
);

export default FirstSlider;
