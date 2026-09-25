import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
