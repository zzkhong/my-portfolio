import React from "react";
import Image from "next/legacy/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { List } from "@mantine/core";

import colors from "utils/colors";
import styles from "./index.module.css";

const jsStyles = {
  instance: {
    background: colors.GREY_600,
    color: colors.WHITE,
  },
  instanceFirst: {
    background: colors.BLUE,
    color: colors.WHITE,
  },
  instanceIntern: {
    background: colors.GREEN,
    color: colors.WHITE,
  },
  arrow: {
    borderRight: `7px solid ${colors.GREY_600}`,
  },
  arrowFirst: {
    borderRight: `7px solid ${colors.BLUE}`,
  },
  arrowIntern: {
    borderRight: `7px solid ${colors.GREEN}`,
  },
};

interface TimelineProp {
  experiences: Experience[];
  companies: Record<string, Company>;
}

const Timeline: React.FC<TimelineProp> = ({ experiences, companies }) => {
  const contentArrowStyle = (i: number): React.CSSProperties => {
    if (i === 0) {
      return jsStyles.arrowFirst;
    } else if (i === experiences.length - 1) {
      return jsStyles.arrowIntern;
    } else {
      return jsStyles.arrow;
    }
  };

  const contentStyle = (i: number): React.CSSProperties => {
    if (i === 0) {
      return jsStyles.instanceFirst;
    } else if (i === experiences.length - 1) {
      return jsStyles.instanceIntern;
    } else {
      return jsStyles.instance;
    }
  };

  return (
    <VerticalTimeline lineColor={colors.BLUE}>
      {experiences.map((data, i) => (
        <VerticalTimelineElement
          key={data.company}
          iconOnClick={() => window.open(data.link)}
          contentStyle={contentStyle(i)}
          contentArrowStyle={contentArrowStyle(i)}
          className="vertical-timeline-element--work"
          iconClassName={styles.icon}
          date={data.period}
          dateClassName={styles.date}
          icon={
            <Image
              layout="fill"
              className={styles.logo}
              src={companies[data.company].image}
              alt={data.company}
            />
          }
        >
          <div className={styles.header}>
            <span className={styles.title}>{data.title}</span>
            <span className={styles.company}>
              {companies[data.company].name}
            </span>
          </div>

          <List className={styles.list} spacing="sm">
            {data.achievement.map((item) => (
              <List.Item key={item} className={styles.listItem}>
                {item}
              </List.Item>
            ))}
          </List>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
