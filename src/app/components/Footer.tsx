import React from "react";

const Footer = () => {
  return (
    <> 
      <div className="flex justify-center items-center w-full h-60 lg:h-32">
        <div className="flex justify-between w-95 items-center max-sm:flex-col  text-sm font-normal gap-2">
          <p>@ 2024 Behance all rights reserved</p>
          <p className="text-gray">
            <span className="text-black font-semibold">10,214</span> Projects
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
