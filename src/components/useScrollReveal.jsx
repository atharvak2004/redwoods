import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      elements.forEach((el) => {
        if (el.classList.contains("active")) return;

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (
          rect.top < viewportHeight * 0.6 &&
          rect.bottom > viewportHeight * 0.4
        ) {
          el.classList.add("active");
        }
      });
    };

    // Run on load + scroll
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, [location.pathname]);
};

export default useScrollReveal;
