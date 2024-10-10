// import logo from './logo.svg';
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import MovieCarousel from './components/MoviesCarousel';
import MoviesSearch from './components/MoviesSearch';
import movies from './Movies';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import categories from './Categories';
import tvseries from './Tvseries';
import { FaBars, FaTimes } from 'react-icons/fa';

const App = () => {




  // const [filteredMovies, setFilteredMovies] = useState(movies);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  const [filteredMovies, setFilteredMovies] = useState(movies); // All movies by default
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleSearch = (query) => {
  //     const filtered = movies.filter(movie =>
  //         movie.title.toLowerCase().includes(query.toLowerCase())
  //     );
  //     setFilteredMovies(filtered);
  // }
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.trim())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies(movies); // Reset to all movies if the search is empty
    }
  };


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
};


return (
  <div className="App">
    <h1>Trending Movies</h1>
    <MoviesSearch onSearch={handleSearch} />
    
    <div className="button-container">
      {/* Buttons for desktop view */}
      <button className="login-button" onClick={() => setIsModalOpen(true)}>Login</button>
      <button className="signup-button" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
    </div>

    {/* Hamburger Menu for mobile view */}
    <div className="hamburger-menu">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      {isMenuOpen && (
        <div className="menu">
          <button className="login-button" onClick={() => setIsModalOpen(true)}>Login</button>
          <button className="signup-button" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
        </div>
      )}
    </div>
    <br/>
    {searchQuery && filteredMovies.length === 0 && (
      <p>No results found</p>
    )}
    <MovieCarousel movies={filteredMovies} />


    <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories">
          {categories.map((category) => (
            <div className="category" key={category.id}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="categories-section">
        <h2>Tv Series</h2>
        <div className="categories">
          {tvseries.map((tvserie) => (
            <div className="category" key={tvserie.id}>
              <img src={tvserie.image} alt={tvserie.name} />
              <h3>{tvserie.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
    <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
  </div>
);
};

export default App;
