import React, { FC } from "react";

interface LogoProps {
  title: string;
  src: string;
  name: string;
}

const Logo: FC<LogoProps> = ({ title, src, name }) => {
  return (
    <a href="#">
      <span className="sr-only">{title}</span>
      <img src={src} alt={title} className="h-8 w-auto" />
    </a>
  );
};

export default Logo;
