import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.content}>
      <h1>Hi 👋, I am Shubh Agrawal</h1>
      <h2>I am a JavaScript developer</h2>
      <p>
        <a className={styles.link} href="https://theshubhagrwl.netlify.app/">
          &rarr; Checkout my website
        </a>
      </p>
    </div>
  );
};

export default About;
