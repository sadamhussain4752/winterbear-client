import React,{useState,useEffect} from "react";
import logoImage from "../../src/constant/images/Winterbear-Favicon-Purple.png";
import splashVideo from "../../src/constant/video/OUTROW.mp4"; // Adjust the path as needed

const usePlatform = () => {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    setIsWindows(platform.includes('win'));
  }, []);

  return isWindows;
};

const SplashScreen = () => {
  const isWindows = usePlatform();

  return (
    <div className="splash-screen fade-in">
      <div className="text-center">
        <div className="video-container">
          <video autoPlay muted loop className="splash-video" style={{
               backgroundColor: !isWindows ? '#5744a1' : '#4d3c96',

          }}>
            <source src={splashVideo} type="video/mp4" />
          </video>
        </div>
     
      </div>
    </div>
  );
};

export default SplashScreen;
