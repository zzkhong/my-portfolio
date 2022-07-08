import React from "react";
import Image from "next/image";
import { Button, Modal } from "@mantine/core";

import companies from "data/companies";
import skills from "data/skills";

import styles from "./index.module.css";
import Bubble from "components/Bubble";

const Portfolio: React.FC = () => {
  const [current, setCurrent] = React.useState<Portfolio>();
  const [open, setOpen] = React.useState(false);

  const portfolio: Portfolio[] = [
    {
      key: "portfolio",
      image: "/portfolio/paywatch.png",
      // image: "/portfolio/me.webp",
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
      image: "/portfolio/paywatch.png",
      description:
        "The website for introducing and promoting the Earned Waged Access solution",
      title: "Paywatch Global Webpage",
      association: "paywatch",
      skills: ["gatsby", "tailwind", "javascript"],
      link: "https://www.paywatchglobal.com/",
    },
    {
      key: "paywatchapp",
      image: "/portfolio/paywatch.png",
      description: "Providing the Earned Waged Access solution in mobile app",
      title: "Paywatch APP",
      association: "paywatch",
      skills: ["reactnative", "azure", "typescript"],
      link: "https://play.google.com/store/apps/details?id=my.paywatchglobal.paywatch",
    },
    {
      key: "daikin",
      image: "/portfolio/daikin.png",
      description: "IoT solution for air-conditioning in mobile app",
      title: "GO Daikin",
      association: "upstack",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=my.com.daikin.app",
    },
    {
      key: "acson",
      image: "/portfolio/acson.png",
      description: "IoT solution for air-conditioning in mobile app",
      title: "MY Acson",
      association: "upstack",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=my.com.acson.app",
    },
    {
      key: "6jars",
      image: "/portfolio/6jars.png",
      description:
        "Self project, budgeting mobile app which try to auto record recurring expenses",
      title: "6Jars - Smart Budgeting APP",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=com.zzkhong.sixjars",
    },
    {
      key: "peridott",
      image: "/portfolio/peridott.png",
      description:
        "Freelance project, CMS system used to manage dynamic content on existing static website",
      title: "Peridott Beyond CMS",
      skills: ["php", "symfony"],
      link: "http://www.peridottbeyond.com/",
    },
    {
      key: "freeview",
      image: "/portfolio/freeview.png",
      description: "UK Broadcasting platform on SONY Linux TV",
      title: "SONY Linux FreeView",
      association: "sony",
      skills: ["react", "javascript"],
      link: "https://www.freeview.co.uk/",
    },
    {
      key: "attendink",
      image: "/portfolio/attendink.png",
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

  const handleOpen = React.useCallback(
    (selected: Portfolio) => {
      setCurrent(selected);
      setOpen(true);
    },
    [setCurrent, setOpen]
  );

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Modal
        opened={open}
        onClose={handleClose}
        centered
        withCloseButton={false}
      >
        <div className={styles.modalTitle}>
          {current?.image && (
            <div className={styles.modalImage}>
              <Image layout="fill" src={current.image} alt="" />
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
            onClick={() => handleOpen(data)}
          >
            <div className={styles.image}>
              <Image layout="fill" src={data.image} alt={data.title} />
            </div>
          </a>
        ))}
      </>
    </>
  );
};

export default Portfolio;
