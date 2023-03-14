import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Parallax } from "react-scroll-parallax";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import Bubble from "components/Bubble";
import { Wave } from "components/Haikei";

import useWindowDimensions from "hooks/useWindowDimensions";
import skills from "data/skills";
import feed from "data/feed";

import styles from "styles/index.module.css";

const DynamicTimeline = dynamic(() => import("components/Timeline"));
const DynamicPortfolio = dynamic(() => import("components/Portfolio"));
const DynamicFooter = dynamic(() => import("components/Footer"));

const Home: NextPage = () => {
  const { height } = useWindowDimensions();
  const parallaxSpeed = height && height > 700 ? 15 : 7.5;

  const titleVariant = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, delay: 0.25 },
    },
    hidden: { opacity: 0, translateX: -300 },
  };
  const rightVariant = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, delay: 0.75 },
    },
    hidden: { opacity: 0, translateX: -300 },
  };
  const upVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, delay: 0.75 },
    },
    hidden: { opacity: 0, translateY: 100 },
  };
  const nonDelayUpVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, delay: 0.25 },
    },
    hidden: { opacity: 0, translateY: 100 },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CK Chin&apos;s Portfolio</title>
        <meta
          name="description"
          content="CK Chin is a Full Stack Developer working at Paywatch, specialize in React, React Native and FE Development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LazyMotion features={domAnimation}>
        <Wave />

        <main className={styles.main}>
          {/* Introduction */}
          <Parallax
            id="intro"
            speed={-parallaxSpeed}
            className={styles.banner_intro}
          >
            <m.h1 variants={titleVariant} initial="hidden" animate="visible">
              Hello, I&apos;m <span className={styles.accent}>CK Chin</span>
            </m.h1>
            <div className={styles.headerRow}>
              {feed.map((f) => (
                <m.a
                  key={f.key}
                  variants={upVariant}
                  initial="hidden"
                  animate="visible"
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.feed}
                >
                  <Image width={24} height={24} src={f.icon} alt={f.key} />
                </m.a>
              ))}
            </div>

            <m.p variants={rightVariant} initial="hidden" animate="visible">
              I&apos;m an experienced{" "}
              <b>
                <u>Full Stack Developer</u>
              </b>
              <br />
              Specialize in <b>Web & Mobile Development</b>.
            </m.p>

            <m.div variants={rightVariant} initial="hidden" animate="visible">
              <Link
                className={styles.resume}
                target="_blank"
                href="/resume/resume.pdf"
              >
                Get My Resume here
              </Link>
            </m.div>

            <m.div variants={upVariant} initial="hidden" animate="visible">
              <h2>Skills</h2>
              <div className={styles.skills}>
                {Object.keys(skills).map((skill: any) => (
                  <Bubble
                    key={skills[skill].label}
                    icon={skills[skill].icon}
                    label={skills[skill].label}
                  />
                ))}
              </div>
            </m.div>
          </Parallax>

          {/* My Career Journey */}
          <Parallax
            id="career"
            speed={parallaxSpeed}
            className={styles.banner_career}
          >
            <m.h1
              variants={nonDelayUpVariant}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              My Career
            </m.h1>

            <DynamicTimeline />
          </Parallax>

          {/* My Portfolio */}
          <Parallax
            id="portfolio"
            speed={-parallaxSpeed}
            className={styles.banner_portfolio}
          >
            <h1>My Portfolio</h1>
            <m.div
              className={styles.portfolio}
              variants={nonDelayUpVariant}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <DynamicPortfolio />
            </m.div>
          </Parallax>
        </main>
      </LazyMotion>

      <DynamicFooter />
    </div>
  );
};

export default Home;
