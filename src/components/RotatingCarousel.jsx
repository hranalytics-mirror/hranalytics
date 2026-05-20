import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RotatingCarousel = ({ images, className = "" }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  const getStyles = (index) => {
    const diff = (index - active + images.length) % images.length;

    switch (diff) {
      case 0:
        return {
          x: 0,
          scale: 1.15,
          rotateY: 0,
          zIndex: 5,
          opacity: 1,
        };

      case 1:
        return {
          x: 150,
          scale: 0.9,
          rotateY: -25,
          zIndex: 4,
          opacity: 0.8,
        };

      case 2:
        return {
          x: 260,
          scale: 0.7,
          rotateY: -35,
          zIndex: 3,
          opacity: 0.35,
        };

      case 4:
        return {
          x: -150,
          scale: 0.9,
          rotateY: 25,
          zIndex: 4,
          opacity: 0.8,
        };

      case 3:
        return {
          x: -260,
          scale: 0.7,
          rotateY: 35,
          zIndex: 3,
          opacity: 0.35,
        };

      default:
        return {};
    }
  };

  return (
    <div
      className={`
        absolute
        w-[500px]
        h-[370px]
        ${className}
      `}
      style={{
        perspective: "1200px",
      }}
    >
      {images.map((img, index) => {
        const style = getStyles(index);

        return (
          <motion.div
            key={index}
            animate={style}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: style.scale + 0.08,
            }}
            className="
              absolute
              xl:left-[40%] lg:left-[50%]
              top-[30%]
              
              overflow-hidden
              shadow-2xl
              cursor-pointer
            "
            style={{
              width: "140px",
              height: "240px",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={img}
              key={index}
              alt={`Book cover ${index + 1}`}
              className="
                w-full
                h-full
                object-cover
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default RotatingCarousel;
