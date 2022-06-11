import Link from "next/link";
import axios from "axios";

import styles from "../assets/css/index.module.css";
import Navbar from "./navbar";

export async function getStaticProps() {
  const { data } = await axios.get("https://api.magicthegathering.io/v1/cards");

  return {
    props: {
      cards: data.cards
    }
  };
}

export default function Home({ cards }) {
  return (
    <div className={styles.root}>
      <Navbar />
      {cards.map(({ id, imageUrl }) => (
        <div key={id} className={styles.card}>
          <Link href={`/cards/${id}`}>
            <a>
              <img src={imageUrl} alt="" />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
