import React from "react";
import moment from "moment";

import styles from "./index.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>{`Copyright © ${moment().year()} CK Chin. All rights reserved.`}</span>
    </footer>
  );
};

export default Footer;
