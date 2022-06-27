import React from "react";
import Image from "next/image";
import { Button, Modal } from "@mantine/core";

import me from "assets/portfolio/me.png";
import paywatch from "assets/portfolio/paywatch.png";
import daikin from "assets/portfolio/daikin.png";
import acson from "assets/portfolio/acson.png";
import sixjars from "assets/portfolio/6jars.png";
import peridott from "assets/portfolio/peridott.png";
import freeview from "assets/portfolio/freeview.png";
import attendink from "assets/portfolio/attendink.png";

import companies from "data/companies";
import skills from "data/skills";

import styles from "./index.module.css";
import Bubble from "components/Bubble";

const Portfolio: React.FC = () => {
  const [current, setCurrent] = React.useState<Portfolio>();

  const portfolio: Portfolio[] = [
    {
      key: "portfolio",
      image: me,
      description: "My Portfolio, the current website you looking at",
      title: "My Porfolio",
      skills: ["nextjs", "tailwind", "typescript"],
      link: "",
    },
    // {
    //   key: "onezoapp",
    //   image: me,
    //   title: "OneZo APP",
    //   skills: ["reactnative", "azure", "typescript"],
    //   link: "",
    // },
    {
      key: "paywatchweb",
      image: paywatch,
      description:
        "The website for introducing and promoting the Earned Waged Access solution",
      title: "Paywatch Global Webpage",
      association: "paywatch",
      skills: ["gatsby", "tailwind", "javascript"],
      link: "https://www.paywatchglobal.com/",
    },
    {
      key: "paywatchapp",
      image: paywatch,
      description: "Providing the Earned Waged Access solution in mobile app",
      title: "Paywatch APP",
      association: "paywatch",
      skills: ["reactnative", "azure", "typescript"],
      link: "https://play.google.com/store/apps/details?id=my.paywatchglobal.paywatch",
    },
    {
      key: "daikin",
      image: daikin,
      description: "IoT solution for air-conditioning in mobile app",
      title: "GO Daikin",
      association: "upstack",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=my.com.daikin.app",
    },
    {
      key: "acson",
      image: acson,
      description: "IoT solution for air-conditioning in mobile app",
      title: "MY Acson",
      association: "upstack",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=my.com.acson.app",
    },
    {
      key: "6jars",
      image: sixjars,
      description:
        "Self project, budgeting mobile app which try to auto record recurring expenses",
      title: "6Jars - Smart Budgeting APP",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=com.zzkhong.sixjars",
    },
    {
      key: "peridott",
      image: peridott,
      description:
        "Freelance project, CMS system used to manage dynamic content on existing static website",
      title: "Peridott Beyond CMS",
      skills: ["php", "symfony"],
      link: "http://www.peridottbeyond.com/",
    },
    {
      key: "freeview",
      image: freeview,
      description: "UK Broadcasting platform on SONY Linux TV",
      title: "SONY Linux FreeView",
      association: "sony",
      skills: ["react", "javascript"],
      link: "https://www.freeview.co.uk/",
    },
    {
      key: "attendink",
      image: attendink,
      description:
        "Intern project, attendance taking native android mobile application",
      title: "AttendInk",
      association: "werebits",
      skills: ["android"],
      link: "https://play.google.com/store/apps/details?id=com.werebits.attendink",
    },
  ];

  const filteredSkills = React.useMemo(() => {
    return skills.filter((skill) => current?.skills.includes(skill.key));
  }, [current]);

  return (
    <>
      <Modal
        opened={current !== undefined}
        onClose={() => setCurrent(undefined)}
        centered
        withCloseButton={false}
      >
        <div className={styles.modalTitle}>
          {current?.image && (
            <div className={styles.modalImage}>
              <Image src={current.image} alt="" />
            </div>
          )}
          <h3>{current?.title}</h3>
        </div>

        <p>{current?.description}</p>

        {current?.association && (
          <>
            <b>Associated with:</b>
            <div className={styles.companyImage}>
              <Image src={companies[current.association].image} alt="" />
            </div>
            <br />
          </>
        )}

        <b>Development Tools</b>
        <div className={styles.modalSkills}>
          {filteredSkills.map((data) => (
            <Bubble key={data.key} label={data.label} icon={data.icon} />
          ))}
        </div>
        <br />

        <Button
          fullWidth
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={current?.link}
        >
          View Project
        </Button>
      </Modal>

      <>
        {portfolio.map((data) => (
          <a
            key={data.key}
            className={styles.portfolio}
            onClick={() => setCurrent(data)}
          >
            <div className={styles.image}>
              <Image src={data.image} alt={data.title} />
            </div>
          </a>
        ))}
      </>
    </>
  );
};

export default Portfolio;
