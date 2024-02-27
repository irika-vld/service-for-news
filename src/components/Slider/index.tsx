import React, { useRef } from "react";
import styles from "./index.module.scss";

interface Props {
  children: React.ReactElement;
  step?: number;
  isDark: boolean
}

const Slider = ({ children, step = 150, isDark }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };
  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button
        onClick={scrollLeft}
        className={`${styles.sliderArrow} ${
          isDark ? styles.dark : styles.light
        }`}
      >
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.sliderArrow}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
