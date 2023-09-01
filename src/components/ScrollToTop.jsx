import React, { useState, useEffect } from "react";
import { upArrow } from "../assets";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {" "}
      {showTopBtn && (
        <div onClick={goToTop} className="fixed right-8 bottom-12 hover:cursor-pointer">
          <img src={upArrow} width={60} height={60} alt="upArrow" />
        </div>
      )}
    </div>
  );
};
export default ScrollToTop;
