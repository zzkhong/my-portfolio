import React from "react";
import Image from "next/legacy/image";
import { Button, Modal } from "@mantine/core";

import companies from "data/companies";
import portfolio from "data/portfolio";
import skills from "data/skills";

import styles from "./index.module.css";
import Bubble from "components/Bubble";

const Portfolio: React.FC = () => {
  const [current, setCurrent] = React.useState<Portfolio>();
  const [open, setOpen] = React.useState(false);

  const skillKeys = Object.keys(skills);
  const filteredSkills = React.useMemo(
    () => skillKeys.filter((s) => current?.skills.includes(s)),
    [current, skillKeys]
  );

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
              <Image
                layout="fill"
                src={companies[current.association].image}
                alt=""
              />
            </div>
            <br />
          </>
        )}

        <b>Development Tools</b>
        <div className={styles.modalSkills}>
          {filteredSkills.map((s) => (
            <Bubble
              key={skills[s].key}
              label={skills[s].label}
              icon={skills[s].icon}
            />
          ))}
        </div>
        <br />

        <Button
          disabled={current?.link === undefined}
          className={current?.link === undefined ? styles.disabled : ""}
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
