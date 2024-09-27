"use client";

import { useEffect } from "react";

function VideoPlayer({ src }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const videos = document.querySelectorAll("video");
      videos.forEach((video) => video.play());
    }
  }, []);

  return (
    <div>
      <video
        className="md:max-w-full"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/webm" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

export default VideoPlayer;
