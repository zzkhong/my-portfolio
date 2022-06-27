import React from "react";
import Image from "next/image";

import me from "assets/portfolio/me.png";
import paywatch from "assets/portfolio/paywatch.png";
import daikin from "assets/portfolio/daikin.png";
import acson from "assets/portfolio/acson.png";
import sixjars from "assets/portfolio/6jars.png";
import peridott from "assets/portfolio/peridott.png";
import freeview from "assets/portfolio/freeview.png";
import attendink from "assets/portfolio/attendink.png";

import styles from "./index.module.css";

const Portfolio: React.FC = () => {
  const portfolio: Portfolio[] = [
    {
      key: "portfolio",
      image: me,
      title: "My Porfolio",
      skills: ["nextjs", "tailwind", "typescript"],
      link: "",
    },
    //   {
    //     key: "onezoapp",
    //     image: "",
    //     title: "OneZo APP",
    //     skills: ["reactnative", "azure", "typescript"],
    //     link: "",
    //   },
    {
      key: "paywatchweb",
      image: paywatch,
      title: "Paywatch Global Webpage",
      association: "paywatch",
      skills: ["gatsby", "tailwind", "javascript"],
      link: "https://www.paywatchglobal.com/",
    },
    {
      key: "paywatchapp",
      image: paywatch,
      title: "Paywatch APP",
      association: "paywatch",
      skills: ["reactnative", "azure", "typescript"],
      link: "https://play.google.com/store/apps/details?id=my.paywatchglobal.paywatch",
    },
    {
      key: "daikin",
      image: daikin,
      title: "GO Daikin",
      association: "upstack",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=my.com.daikin.app",
    },
    {
      key: "acson",
      image: acson,
      title: "MY Acson",
      association: "upstack",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=my.com.acson.app",
    },
    {
      key: "6jars",
      image: sixjars,
      title: "6Jars - Smart Budgeting APP",
      skills: ["reactnative", "circleci", "javascript"],
      link: "https://play.google.com/store/apps/details?id=com.zzkhong.sixjars",
    },
    {
      key: "peridott",
      image: peridott,
      title: "Peridott Beyond CMS",
      skills: ["php", "symfony"],
      link: "http://www.peridottbeyond.com/",
    },
    {
      key: "freeview",
      image: freeview,
      title: "SONY Linux FreeView",
      association: "sony",
      skills: ["react", "javascript"],
      link: "https://www.freeview.co.uk/",
    },
    {
      key: "attendink",
      image: attendink,
      title: "AttendInk",
      association: "werebits",
      skills: ["android"],
      link: "https://play.google.com/store/apps/details?id=com.werebits.attendink",
    },
  ];

  return (
    <>
      {portfolio.map((data) => (
        <a
          key={data.key}
          className={styles.portfolio}
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.image}>
            <Image src={data.image} alt={data.title} />
          </div>
        </a>
      ))}
    </>
  );
};

export default Portfolio;
