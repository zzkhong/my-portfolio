import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { List } from "@mantine/core";

import experience from "data/experience";
import companies from "data/companies";

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
  arrow: {
    borderRight: `7px solid ${colors.GREY_600}`,
  },
  arrowFirst: {
    borderRight: `7px solid ${colors.BLUE}`,
  },
};

const Timeline: React.FC = () => {
  return (
    <VerticalTimeline lineColor={colors.BLUE}>
      {experience.map((data, i) => (
        <VerticalTimelineElement
          key={data.company}
          iconOnClick={() => window.open(data.link)}
          contentStyle={i === 0 ? jsStyles.instanceFirst : jsStyles.instance}
          contentArrowStyle={i === 0 ? jsStyles.arrowFirst : jsStyles.arrow}
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
            <span className={styles.title}>{data.title}</span>,
            <span className={styles.company}>
              {companies[data.company].name}
            </span>
          </div>

          <List className={styles.list} spacing="sm">
            {data.achievement.map((item) => (
              <List.Item className={styles.listItem}>{item}</List.Item>
            ))}
          </List>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
