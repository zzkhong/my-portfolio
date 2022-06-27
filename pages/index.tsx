import React from "react";
import Head from "next/head";
import moment from "moment";
import type { NextPage } from "next";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import Footer from "components/Footer";
import Bubble from "components/Bubble";
import Portfolio from "components/Portfolio";
import Timeline from "components/Timeline";

import styles from "styles/index.module.css";

import skills from "data/skills";

const Home: NextPage = () => {
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

  return (
    <div className={styles.container}>
      <Head>
        <title>CK Chin&apos;s Portfolio</title>
        <meta
          name="description"
          content="CK Chin is a Full Stack Developer at Paywatch, specialize in React, React Native and FE Development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Introduction */}
        <Parallax id="intro" speed={-10} className={styles.banner_intro}>
          <motion.h1 variants={titleVariant} initial="hidden" animate="visible">
            Hello, I&apos;m <span className={styles.name}>CK Chin</span>
          </motion.h1>
          <motion.span
            variants={rightVariant}
            initial="hidden"
            animate="visible"
          >{`Malaysian, ${moment().year() - 1996} y/o`}</motion.span>

          <motion.p variants={rightVariant} initial="hidden" animate="visible">
            I&apos;m an experienced{" "}
            <b>
              <u>Full Stack developer</u>
            </b>{" "}
            currently working at <b>Paywatch</b>, specialize in{" "}
            <b>Mobile Development</b> and <b>Web Development</b>.
          </motion.p>

          <motion.div variants={upVariant} initial="hidden" animate="visible">
            <h2>Skills</h2>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <Bubble
                  key={skill.label}
                  icon={skill.icon}
                  label={skill.label}
                />
              ))}
            </div>
          </motion.div>
        </Parallax>

        {/* My Career Journey */}
        <Parallax id="career" speed={10} className={styles.banner_career}>
          <motion.h1
            variants={upVariant}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            My Career Journey
          </motion.h1>

          <Timeline />
        </Parallax>

        {/* My Portfolio */}
        <Parallax
          id="portfolio"
          speed={-10}
          className={styles.banner_portfolio}
        >
          <h1>My Portfolio</h1>
          <motion.div
            className={styles.portfolio}
            variants={upVariant}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Portfolio />
          </motion.div>
        </Parallax>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
