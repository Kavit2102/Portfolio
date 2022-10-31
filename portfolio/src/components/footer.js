import React from "react";
import * as faIcon from "react-icons/fa";

const Footer = (props) => {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, Kavit Desai.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
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
  );
};

export default Footer;
