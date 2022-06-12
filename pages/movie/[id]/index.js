import axios from "axios";

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
      <h2>{films.title}</h2>
      <div>
        <img src={films.image} alt="" />
      </div>
    </div>
  );
}
