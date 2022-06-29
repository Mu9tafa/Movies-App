import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LanguageContext from './context/LanguageContext';

import Favorites from './pages/Favorites';
import Movies from './pages/Movies';
import MoviesDetails from './pages/MoviesDetails';

import MovieSearch from './pages/MovieSearch';

function App() {
  const [contextLanguage, setContextLanguage] = useState('en');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (val) => {
    setSearchValue(val);
  };
  return (
    <div className="App">
      <Router>
        <LanguageContext.Provider
          value={{ contextLanguage, setContextLanguage }}
        >
          <Navbar handleSearch={handleSearch} />
          <Switch>
            <Route path="/" exact>
              <Movies />
            </Route>
            <Route path="/movies-details/:id">
              <MoviesDetails />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/movie-search">
              <MovieSearch searchValue={searchValue} />
            </Route>
          </Switch>
        </LanguageContext.Provider>
      </Router>
    </div>
  );
}

export default App;
