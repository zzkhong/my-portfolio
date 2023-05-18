import React from "react";
import { m } from "framer-motion";

import styles from "./index.module.css";

const Blob: React.FC = () => {
  const showVariant = {
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <m.div
      className={styles.blob}
      variants={showVariant}
      initial="hidden"
      animate="visible"
    >
      <svg id="visual" width="100%" height="600" version="1.1">
        <g transform="translate(479.28077484626266 271.888015089768)">
          <path
            id="blob1"
            d="M156.5 -165.9C181.5 -131.5 165.8 -65.8 158.8 -7C151.9 51.9 153.7 103.7 128.7 153.7C103.7 203.7 51.9 251.9 -1.3 253.2C-54.4 254.4 -108.9 208.9 -154.2 158.9C-199.6 108.9 -235.8 54.4 -227.5 8.2C-219.3 -37.9 -166.6 -75.9 -121.2 -110.2C-75.9 -144.6 -37.9 -175.3 13.9 -189.2C65.8 -203.1 131.5 -200.2 156.5 -165.9"
            fill="#1ce6b050"
          ></path>
        </g>
        <g
          transform="translate(441.557535871604 315.8289230650975)"
          visibility="hidden"
        >
          <path
            id="blob2"
            d="M140.8 -155.6C175.9 -105.6 193.5 -52.8 184.7 -8.7C176 35.4 141 70.7 105.9 113.4C70.7 156 35.4 206 -14.5 220.5C-64.3 235 -128.7 214 -154.4 171.4C-180 128.7 -167 64.3 -164.9 2.1C-162.8 -60.1 -171.5 -120.2 -145.9 -170.2C-120.2 -220.2 -60.1 -260.1 -3.7 -256.5C52.8 -252.8 105.6 -205.6 140.8 -155.6"
            fill="#1ce6b050"
          ></path>
        </g>
      </svg>
    </m.div>
  );
};

export default Blob;
