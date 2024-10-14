import React, { useEffect } from 'react';
import { Button, Spin } from 'antd';

const Loader = () => {
  const [spinning, setSpinning] = React.useState(true);
  const [percent, setPercent] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setSpinning(false);
      setPercent(0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showLoader = () => {
    setSpinning(true);
    let ptg = -10;
    const interval = setInterval(() => {
      ptg += 5;
      setPercent(ptg);
      if (ptg > 120) {
        clearInterval(interval);
        setSpinning(false);
        setPercent(0);
      }
    }, 100);
  };

  return (
    <>
      <Spin spinning={spinning} percent={percent} fullscreen />
      <Button onClick={showLoader}>Show Loader</Button>
    </>
  );
};

export default Loader;
