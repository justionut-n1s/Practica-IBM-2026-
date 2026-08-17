import React from "react";
import { logo as NestLogo } from "../../../assets/images/index";
import "./Logo.css";

interface LogoProps {
  logoHeight: number;
  logoWidth: number;
}

const Logo: React.FC<LogoProps> = ({ logoHeight, logoWidth }) => {
  return (
    <div className="logo-container-style">
      <img
        src={NestLogo}
        alt="Logo"
        height={logoHeight}
        width={logoWidth}
      ></img>
    </div>
  );
};

export default Logo;
