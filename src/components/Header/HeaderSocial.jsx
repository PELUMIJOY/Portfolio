import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
