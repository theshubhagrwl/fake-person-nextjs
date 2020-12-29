import Head from "next/head";
import { render } from "react-dom";
import styles from "../styles/Home.module.css";

export default function Home({ rPerson }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Person </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hi 👋, I am</h1>
      </main>
      {rPerson.results.map((det, key) => {
        return (
          <div className={styles.card} key={key}>
            <div className={styles.profilePic}>
              <img src={det.picture.large} alt="" />
            </div>
            <p>
              <b>{`${det.name.title}. ${det.name.first} ${det.name.last}`}</b>
            </p>
            <p>
              {`${det.location.city}, ${det.location.state}, ${det.location.country}`}
            </p>
            <p>{`${det.email}`}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api/");
  const rPerson = await res.json();

  return {
    props: {
      rPerson,
    },
  };
}
