import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let finished = false;
    const MIN_TIME = 1000;
    const start = Date.now();

    const finish = () => {
      if (finished) return;
      finished = true;

      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_TIME - elapsed, 0);

      setTimeout(() => setLoading(false), remaining);
    };

    setTimeout(() => {
      const images = [...document.querySelectorAll("img")];
      const videos = [...document.querySelectorAll("video")];
      const media = [...images, ...videos];

      if (media.length === 0) return finish();

      let loaded = 0;

      const handleLoad = () => {
        loaded++;
        if (loaded === media.length) finish();
      };

      media.forEach((el) => {
        if (el.tagName === "IMG") {
          if (el.complete) handleLoad();
          else el.onload = el.onerror = handleLoad;
        } else if (el.tagName === "VIDEO") {
          if (el.readyState >= 3) handleLoad();
          else el.onloadeddata = el.onerror = handleLoad;
        }
      });
      setTimeout(finish, 5000);
    }, 150);
  }, []);

  if (loading) return <Loader />;

  return children;
}
