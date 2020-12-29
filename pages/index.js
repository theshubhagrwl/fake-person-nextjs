import Head from "next/head";
import { render } from "react-dom";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ rPerson, fakePerson }) {
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
              <img
                src={fakePerson.image_url}
                alt="{fakePerson.filename}"
                height="200px"
              />
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
      <footer className={styles.footer}>
        <Link href="/about">Made with ♥ by Shubh </Link>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://randomuser.me/api/?gender=female");
  const rPerson = await res.json();

  const res1 = await fetch("https://fakeface.rest/face/json?gender=female");
  const fakePerson = await res1.json();

  return {
    props: {
      rPerson,
      fakePerson,
    },
  };
}
