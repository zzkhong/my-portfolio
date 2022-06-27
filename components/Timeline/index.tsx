import React from "react";
import Image from "next/image";

import werebits from "assets/experience/werebits.png";
import sony from "assets/experience/sony.png";
import sony2 from "assets/experience/sony2.png";
import upstack from "assets/experience/upstack.png";
import paywatch from "assets/experience/paywatch.png";
import paywatch2 from "assets/experience/paywatch2.png";

import useHorizontalScroll from "hooks/useHorizontalScroll";

import styles from "./index.module.css";

const Timeline: React.FC = () => {
  const scrollRef = useHorizontalScroll();

  const experience: Experience[] = [
    {
      key: "werebits",
      image: werebits,
      year: "2017",
      title: "Intern at Werebits",
    },
    {
      key: "sony2",
      image: sony2,
      year: "2018",
      title: "Linux TV Development",
    },
    {
      key: "sony",
      image: sony,
      year: "2019",
      title: "Android TV Development",
    },
    {
      key: "upstack",
      image: upstack,
      year: "2020",
      title: "React/React Native Developer at Upstack Studio",
    },
    {
      key: "paywatch2",
      image: paywatch2,
      year: "2021",
      title: "Full-Stack Engineer at Paywatch",
    },
    {
      key: "paywatch",
      image: paywatch,
      year: "2022",
      title: "Full-Stack Engineer at Paywatch",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeline} />

      <div className={styles.container}>
        <div ref={scrollRef} className={styles.instances}>
          {experience.map((exp, index) => (
            <div
              key={exp.key}
              draggable={false}
              className={styles.instance}
              style={{ right: (index + 1) * 300 }}
            >
              <div draggable={false} className={styles.image}>
                <Image draggable={false} src={exp.image} alt={exp.title} />
              </div>

              <div className={styles.indicator} />
              <span className={styles.year}>{exp.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
