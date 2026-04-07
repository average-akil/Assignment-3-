import React from "react";
import Gbtn from "../../assets/Screenshot_203.png";
import Abtn from "../../assets/Screenshot_204.png";
import heroPng from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="h-[700] w-[700]">
      <div className="hero bg-base-200">
        <div className="hero-content text-center flex flex-col">
          <div className="pt-15">
            <h1 className="text-5xl font-bold mx-auto">
              <span className="block">We Build</span>
              <span className="block">
                <span className="text-purple-500">Productive</span> Apps
              </span>
            </h1>
            <p className="py-8 w-128">
              At AppNest, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <a
              className="h-4 w-6"
              href="https://play.google.com/store/apps"
              target="_blank"
            >
              {" "}
              <button className="btn ">
                <img className="" src={Gbtn} alt="" />
              </button>{" "}
            </a>
            <a
              className="h-4 w-6"
              href="https://www.apple.com/app-store/"
              target="_blank"
            >
              {" "}
              <button className="btn ">
                <img className="" src={Abtn} alt="" />
              </button>{" "}
            </a>
          </div>
          <img className="w-128 h-64 mt-4" src={heroPng} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
