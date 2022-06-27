import React from "react";
import Image from "next/image";

import styles from "./index.module.css";

interface BubbleProps {
  icon: string;
  label: string;
}

const Bubble: React.FC<BubbleProps> = ({ icon, label }) => {
  return (
    <div className={styles.bubble}>
      {icon && (
        <div className={styles.icon}>
          <Image src={icon} alt="" />
        </div>
      )}
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Bubble;
