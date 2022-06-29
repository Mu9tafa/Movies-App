import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './movieCard.css';
import {
  addToFavorite,
  removeFromFavorite,
} from '../store/actions/favoriteAction';

const MovieCard = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { title, overview, poster_path, id } = props.movie;
  let posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className="main my-5">
      <div
        className="card"
        style={{
          backgroundImage: `url('${posterPath}')`,
          backgroundClip: 'border-box',
          backgroundSize: '220px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundOrigin: 'padding-box',
        }}
      >
        {/* <div class="text1">
          <img src={{ posterPath }} alt="" />
        </div> */}

        <div className="hover">
          <h2>{title}</h2>
          {/* <h2>{id}</h2> */}
          {/* <div class="text2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            autem dignissimos et tenetur, pariatur dolore voluptas.
          </div> */}
          <button>
            <Link
              className=""
              to={`/movies-details/${id}`}
              style={{ textDecoration: 'none' }}
            >
              Movie Details
            </Link>
          </button>
        </div>
        <div className="star">
          {state.favoriteMovies.favoriteMoviesIDs.find(
            (item) => item.id === id
          ) ? (
            <i
              className="fa-solid fa-star"
              onClick={() => {
                dispatch(removeFromFavorite(props.movie));
              }}
            ></i>
          ) : (
            <i
              className="fa-regular fa-star"
              onClick={() => {
                dispatch(addToFavorite(props.movie));
              }}
            ></i>
          )}
        </div>
      </div>
    </div>

    // <div className="col my-4 MovieCard">
    //   <div className="card h-100 mx-auto" style={{ width: '18rem' }}>
    //     <img className="card-img-top" src={posterPath} alt="Card image cap" />
    //     <div className="card-body">
    //       <h5 className="card-title">{title}</h5>
    //       {/* <p className="card-text">{overview}</p> */}
    //     </div>
    //     <div className="card-footer">
    //       <Link
    //         className="text-muted"
    //         to={`/movies-details/${id}`}
    //         style={{ textDecoration: 'none' }}
    //       >
    //         Movie Details
    //       </Link>
    //     </div>
    //     <div className="star">
    //       {state.favoriteMovies.favoriteMoviesIDs.find(
    //         (item) => item.id === id
    //       ) ? (
    //         <i
    //           className="fa-solid fa-star"
    //           onClick={() => {
    //             dispatch(removeFromFavorite(props.movie));
    //           }}
    //         ></i>
    //       ) : (
    //         <i
    //           className="fa-regular fa-star"
    //           onClick={() => {
    //             dispatch(addToFavorite(props.movie));
    //           }}
    //         ></i>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default MovieCard;
