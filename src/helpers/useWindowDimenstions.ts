import { useState, useEffect } from 'react';

export default function useWindowDimensions(id: string) {
  const [windowDimensions, setWindowDimensions] = useState({height: 0, width: 0});

  useEffect(() => {
    setWindowDimensions({
        height: document.getElementById(id)?.parentElement?.offsetHeight!,
        width: document.getElementById(id)?.parentElement?.offsetWidth!
    })

    function handleResize() {
      setWindowDimensions({
        height: document.getElementById(id)?.parentElement?.offsetHeight!,
        width: document.getElementById(id)?.parentElement?.offsetWidth!
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}
