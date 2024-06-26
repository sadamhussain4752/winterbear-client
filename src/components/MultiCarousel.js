
import React from "react";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import UAParser from "ua-parser-js";
import "react-multi-carousel/lib/styles.css"; // Add this import for styles
import constant from "../constant/constant";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisible: true, // Fix the typo here
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisible: true, // Fix the typo here
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisible: true, // Fix the typo here
    paritialVisibilityGutter: 30
  }
};



const MultiCarousel = ({ deviceType, images,indexs }) => {
  return (
    <Carousel
      ssr
      partialVisible  // Fix the typo here
      deviceType={deviceType}
      // itemClass="image-item"
      responsive={responsive}
      nav={false}

    >
      {images.slice(0, 5).map((image, index) => (
        <img
        loading="lazy"
          key={index} // Add the key prop here
          draggable={false} className=""
          style={{ width: "90%", height: "100%", }}
          src={`${image}`}
          onClick={()=>indexs(index)}
        />
      ))}
    </Carousel>
  );
};

MultiCarousel.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};

export default MultiCarousel;
