import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import axiosInstance from '../network/axiosInstance';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import getAllMovies from '../store/actions/moviesAction';
import LanguageContext from '../context/LanguageContext';
const Movies = () => {
  // const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favoriteLanguage, setFavoriteLanguage] = useState([]);
  const movies = useSelector((state) => state.allMovies.list);
  const state = useSelector((state) => state);

  const { contextLanguage, setContextLanguage } = useContext(LanguageContext);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await axiosInstance.get(`/popular?page=${page}`);
    //   setMovies(response.data.results);
    // };
    // fetchData();
    dispatch(getAllMovies(page, contextLanguage));
    // setFavoriteLanguage((prevState) => {
    //   favoriteLanguage
    // })
  }, [page, contextLanguage]);

  return (
    <div className="Movie">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {movies.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} />
          ))}
        </div>
        <nav aria-label="...">
          <ul className="pagination pagination-lg d-flex justify-content-around m-0">
            <li className="page-item my-5">
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
            </li>
            <li className="page-item my-5">
              <a
                className="btn btn-secondary border-0 px-3 py-2"
                onClick={() => {
                  setPage((prevPage) => ++prevPage);
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Movies;
