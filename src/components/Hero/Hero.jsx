import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h6 className={styles.title}>Hi, I'm <br /> Shubham Kumar</h6>
        <p className={styles.description}>
          Currently, persuing my B.Tech Degree from IIT Kharagpur.
          <br />
          <br />
          I love Competitive Programming and have depth knowledge about DSA.
          <br />I'm a MERN-stack developer and also have some knowledge about Data Analysis.
        </p>
        <a href="mailto:shubham9905374230@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
