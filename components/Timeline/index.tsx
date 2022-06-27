import React from "react";
import Image from "next/image";

import werebits from "assets/experience/werebits.png";
import sony from "assets/experience/sony.png";
import upstack from "assets/experience/upstack.png";
import paywatch from "assets/experience/paywatch.png";

import styles from "./index.module.css";

const Timeline: React.FC = () => {
  const experience: Experience[] = [
    {
      key: "paywatch",
      image: paywatch,
      year: "2021",
      title: "Full-Stack Engineer at Paywatch",
    },
    {
      key: "upstack",
      image: upstack,
      year: "2020",
      title: "React/React Native Developer at Upstack Studio",
    },
    {
      key: "sony",
      image: sony,
      year: "2018",
      title: "Software Engineer at SONY",
    },
    {
      key: "werebits",
      image: werebits,
      year: "2017",
      title: "Intern at Werebits",
    },
  ];

  const Instances = () => (
    <>
      {experience.map((exp, index) => (
        <div
          key={exp.key}
          draggable={false}
          className={styles.instance}
          style={{ right: (index + 1) * 250 }}
        >
          <div draggable={false} className={styles.image}>
            <Image draggable={false} src={exp.image} alt={exp.title} />
          </div>

          <div className={styles.indicator} />
          <span className={styles.year}>{exp.year}</span>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div
        style={{ width: 300 + experience.length * 300 }}
        className={styles.timeline}
      >
        <Instances />
      </div>
    </>
  );
};

export default Timeline;
