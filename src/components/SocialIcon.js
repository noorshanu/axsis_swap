import React from "react";

const SocialIcon = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="w-[2.4em] h-[2.4em] rounded-full border-1 border-green flex items-center justify-center transition-all duration-200 text-white text-sm group hover:bg-green hover:text-black cursor-pointer"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
