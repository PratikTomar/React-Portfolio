import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pratik</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2.4 years of experience using React
          and NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:pratiksingh067@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Home;
