import { useState } from "react";
import styles from "./Image.module.css";

const Image = ({ alt, ...props }) => {
  const [isSkeleton, setIsSkeleton] = useState(true);

  function handleLoad({ target }) {
    setIsSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {isSkeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
