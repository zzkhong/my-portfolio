import React from "react";

import styles from "./index.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>{`Copyright © ${new Date().getFullYear()} CK Chin. All rights reserved.`}</span>
    </footer>
  );
};

export default Footer;
