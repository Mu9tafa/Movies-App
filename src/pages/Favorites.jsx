import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import MovieCard from '../components/MovieCard';
import LanguageContext from '../context/LanguageContext';
import { setFavoriteLanguage } from '../store/actions/favoriteAction';
const Favorites = () => {
  const state = useSelector((state) => state);
  const { contextLanguage, setContextLanguage } = useContext(LanguageContext);
  const dispatch = useDispatch();
  // const { movies } = state.favoriteMovies.favoriteMoviesIDs;
  // useEffect(() => {
  //   let newArr = state.allMovies.list.filter((movie, idx) => {
  //     if (
  //       state.favoriteMovies.favoriteMoviesIDs.find(
  //         (elme) => elme.id === movie.id
  //       )
  //     ) {
  //       return movie;
  //     }
  //   });
  //   // state.favoriteMovies.favoriteMoviesIDs = newArr;
  //   dispatch(setFavoriteLanguage(newArr));
  // }, [contextLanguage]);
  return (
    <div className="h">
      <div className="container py-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {state.favoriteMovies.favoriteMoviesIDs.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} />
          ))}
          {/* {state.allMovies.list.map((movie, idx) => {
            if (
              state.favoriteMovies.favoriteMoviesIDsAr.find(
                (id) => id == movie.id
              )
            ) {
              return <MovieCard key={idx} movie={movie} />;
            }
          })} */}
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

export default Favorites;
