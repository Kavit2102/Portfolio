import React from "react";
import * as faIcon from "react-icons/fa";
import profile from "../assets/profile.jpg";
import bgImage from "../assets/bg.jpg";

const Home = (props) => {
  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat py-8 bg-[#4a389b]`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat" />
      <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-full border-8 border-primary shadow-xl">
            <img src={profile} className="h-48 rounded-full sm:h-56" alt="" />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              Hello I'm Kavit Desai &#33;
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">
                  Let's connect
                </p>
                <div className="hidden sm:block">
                  <faIcon.FaAngleRight color="yellow" size={20} />{" "}
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href="/">
                  <faIcon.FaFacebookSquare color={props.iconColor} size={20} />
                </a>
                <a href="/" className="pl-4">
                  <faIcon.FaLinkedin color={props.iconColor} size={20} />
                </a>
                <a href="/" className="pl-4">
                  <faIcon.FaGithub color={props.iconColor} size={20} />
                </a>
                <a href="/" className="pl-4">
                  <faIcon.FaTwitter color={props.iconColor} size={20} />
                </a>
                <a href="/" className="pl-4">
                  <faIcon.FaInstagram color={props.iconColor} size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
