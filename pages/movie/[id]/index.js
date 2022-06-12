import axios from "axios";
import Navbar from "../../navbar";

import styles from "../../../assets/css/index.module.css"

export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://ghibliapi.herokuapp.com/films`
  );

  return {
    paths: data.map(({ id }) => `/movie/${id}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const { data } = await axios.get(
    `https://ghibliapi.herokuapp.com/films/${id}`
  );

  return {
    props: {
      films: data
    }
  };
}

export default function Card({ films }) {
  console.log('card', films );

  return (
    <div>
      <Navbar />
      <img src="/images/logo.png" className={styles.logo} alt="logo" />
      <div className={styles.cont}>
        <div className={styles.detail}>
          <div>
            <img src={films.image} alt="" className={styles.image}/>
          </div>
          <div className={styles.title_bloc}>
            <div className={styles.title}>
              {films.title}
            </div>
            <div className={styles.subtitle}>
              {films.original_title}
            </div>
            <div className={styles.description}>
              “{films.description}”
            </div>
            <div className={styles.align}>
              <div className={styles.director}>
                {films.director}
              </div>
              <div className={styles.year}>
                {films.release_date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
