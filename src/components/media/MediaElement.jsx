function MediaElement({ src, alt, className = "", isVideo = false, poster = "" }) {
  if (isVideo) {
    return (
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

export default MediaElement;
