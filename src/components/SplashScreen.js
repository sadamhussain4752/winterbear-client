import React, { useEffect, useState } from "react";

const SplashScreen = () => {
  return (
    <div className="splash-screen fade-in">
      <div className="text-center">

        <div className="logo-container">
          <div className="position-relative ">
            <img
              src={require("../../src/constant/images/Winterbear-Favicon-Purple.png")}
              className="position-absolute logo-wid-image-font"
              alt="Logo"
            />
            <img
              src={require("../../src/constant/images/Winterbear-Favicon-Purple.png")}
              className="position-absolute logo-wid-image-end"
              alt="Logo"
            />

          </div>

        </div>

      </div>

    </div>

  );
};

export default SplashScreen;
