import Link from "next/link";
import Image from 'next/image'
import axios from "axios";

import styles from "../assets/css/index.module.css";
import Navbar from "./navbar";

export async function getStaticProps() {
  const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");

  return {
    props: {
      films: data
    }
  };
}

export default function Home({ films }) {
  return (
    <div>
      <Navbar />
      <img src="/images/logo.png" className={styles.logo} alt="logo" />
      <div className={styles.cont}>
      {films.map(({ id, image, title, original_title }) => (
        <div key={id} className={styles.card}>
          <div>
          <Link href={`/movie/${id}`}>
              <a>
                <img src={image} alt="" className={styles.image}/>
              </a>
            </Link>
          </div>
          <div className={styles.title_bloc}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.subtitle}>
              {original_title}
            </div>
            <Link href={`/movie/${id}`}>
              <a className={styles.button}>
                see more
              </a>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
