import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../network/axiosInstance';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

const MoviesDetails = () => {
  const { id } = useParams();
  const { contextLanguage } = useContext(LanguageContext);

  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(
        `/${id}?&language=${contextLanguage}`
      );
      setMovie(response.data);
      console.log('RESPONSEEEEEEDATAAAA', response.data);
      // console.log('MOVIESSSS', movies);
    };

    fetchData();
  }, []);

  let posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '88.5vh' }}
    >
      <div
        className="card"
        style={{
          maxWidth: '740px',
          backgroundColor: '#212534',
          color: '#fff',
          border: '2px solid #0beef9',
        }}
      >
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={posterPath}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title py-5">{movie.title}</h5>
              <p className="card-text pb-4">{movie.overview}</p>
              <p className="card-text">
                <small className="text-muted">
                  Rating: {movie.vote_average}
                </small>
              </p>
              <div className="card-footer">
                <Link
                  className="text-white"
                  to={`/`}
                  style={{ textDecoration: 'none' }}
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="d-flex justify-content-center">
    //   <div className="card h-100" style={{ width: '18rem' }}>
    //     <img className="card-img-top" src={posterPath} alt="Card image cap" />
    //     <div className="card-body">
    //       <h5 className="card-title">{movie.title}</h5>
    //       <p className="card-text">{movie.overview}</p>
    //     </div>
    //     <div className="card-footer">
    //       <Link
    //         className="text-muted"
    //         to={`/`}
    //         style={{ textDecoration: 'none' }}
    //       >
    //         Home
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MoviesDetails;
