import React from "react";
import { m } from "framer-motion";

import styles from "./index.module.css";

const Wave: React.FC = () => {
  const upVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, translateY: 100 },
  };

  return (
    <m.div
      className={styles.wave}
      variants={upVariant}
      initial="hidden"
      animate="visible"
    />
  );
};

export default Wave;
