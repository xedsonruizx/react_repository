// pages/Home.js
import Imagefollow from "react-image-follow";

import React from "react";
import "../assets/css/follow.scss";
const Home = () => {
  return (
    <div className="text-center">
      <div className="slit-in-vertical col-12">
        <h1 className="title is-1 fw-bolder slide-fwd-center text-center mt-5 mb-5 pt-5 pb-5">
          Welcome to my Repository
        </h1>
      </div>

      <div className="justify-content-center d-flex">
        <div className="box p-5 col-12">
          <p className="text-center">
            <div className="pos-relative">
              <h3 className=" fw-bolder">Here you will see about:</h3>
            </div>
            <div className="row my-4">
              <div className="col-12 col-md-6">
                <div className=" text-center card py-5 mt-3 shadow">My self</div>
              </div>
              <div className="col-12 col-md-6">
                <div className=" text-center card py-5 mt-3 shadow">Work</div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className=" text-center card py-5 mt-3  shadow">Projects</div>
              </div>
              <div className="col-12 col-md-6">
                <div className=" text-center card py-5 mt-3 shadow">
                  Certifications
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
