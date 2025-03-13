import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OptimizedImage = ({ src, alt, className}) => {
  const [loaded, setLoaded] = useState(false);

  return (
      <LazyLoadImage
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease-in-out"}}
        wrapperProps={{style: {display: "block"}}}
      />
  );
};

export default OptimizedImage;




