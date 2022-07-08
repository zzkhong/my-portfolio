import React from "react";
import Image from "next/image";

import useDraggableScroll from "hooks/useDraggable";

import experience from "data/experience";

import styles from "./index.module.css";

const Timeline: React.FC = () => {
  const scrollRef = React.createRef<any>();
  const { onMouseDown } = useDraggableScroll(scrollRef, {
    direction: "horizontal",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeline} />

      <div className={styles.container}>
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          className={styles.instances}
        >
          {experience.map((exp, index) => (
            <div
              key={exp.key}
              draggable={false}
              className={styles.instance}
              style={{ right: (index + 1) * 300 }}
            >
              <div draggable={false} className={styles.image}>
                <Image
                  layout="fill"
                  draggable={false}
                  src={exp.image}
                  alt={exp.title}
                />
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
