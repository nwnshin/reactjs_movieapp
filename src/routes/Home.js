import Movie from '../components/Movie'
import { useEffect, useState } from 'react';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await(
        await fetch(
          `https://nomad-movies.nomadcoders.workers.dev/movies`
        )
      ).json();
      console.log(json);
      setMovies(json);
      setLoading(false);
    }
    useEffect(() => {
      getMovies();
    }, []);
    console.log(movies)
    return (
      <div className="App">
        <ol>
        {loading ? <h1>loading!</h1> : movies.map((movie) => (
          <Movie
            id={movie.id}
            posterImg={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            adult={movie.adult}
            releaseDate={movie.release_date}
            summary={movie.overview}
          />
        ))}
        </ol>
      </div>
    );
}

export default Home;