import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const MovieSearch = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f903aef9ae724645859d230857ecb643&query=${props.searchValue}`
      );
      setMovies(response.data.results);
    };

    fetchData();
  }, [props.searchValue]);

  return (
    // <div>
    //   {movies.map((movie, idx) => (
    //     <p key={idx} className="m-3">
    //       {movie.title}
    //     </p>
    //   ))}
    // </div>
    <div className="Movie h">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {movies.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} />
          ))}
        </div>
        <nav aria-label="...">
          <ul className="pagination pagination-lg d-flex justify-content-around my-5">
            {/* <li className="page-item">
              <span
                className="btn btn-secondary border-0 px-3 py-2"
                onClick={() => {
                  setPage((prevPage) => {
                    if (prevPage == 1) {
                      return 1;
                    } else {
                      return --prevPage;
                    }
                  });
                }}
              >
                Previous
              </span>
            </li> */}
            {/* <li className="page-item">
              <a
                className="btn btn-secondary border-0 px-3 py-2"
                onClick={() => {
                  setPage((prevPage) => ++prevPage);
                }}
              >
                Next
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MovieSearch;
