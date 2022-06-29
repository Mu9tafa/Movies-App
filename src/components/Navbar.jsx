import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LanguageContext from '../context/LanguageContext';

export default function Navbar(props) {
  const { contextLanguage, setContextLanguage } = useContext(LanguageContext);
  // console.log(cn);

  const state = useSelector((state) => state);
  const history = useHistory();
  const [search, setSearch] = useState('');
  const handleClickSearch = () => {
    props.handleSearch(search);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3">
      <div className="container">
        {/* <Link className="navbar-brand mb-3" to={'/'}>
          Navbar
        </Link> */}
        <button
          className="navbar-toggler mb-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-3">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/favorites">
              Favorites
            </Link>
          </div>

          <i className="fa-solid fa-star fav mb-3">
            &nbsp;
            <span className="mx-2">
              {state.favoriteMovies.favoriteMoviesIDs.length}
            </span>
          </i>
          <button
            className="btn btn-outline-light mx-2 mb-3"
            onClick={() =>
              setContextLanguage(contextLanguage == 'en' ? 'ar' : 'en')
            }
          >
            {contextLanguage}
          </button>
          <div className="d-flex mb-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                let search = e.target.value;
                setSearch(search);
              }}
            />
            <button
              className="btn btn-outline-light"
              onClick={() => {
                handleClickSearch();
                history.push('/movie-search');
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
