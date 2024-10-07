import React from 'react';
import Slider from 'react-slick';
import './MoviesCarousel.css';

const MovieCarousel = ({ movies }) => {

    const displayedMovies = movies.slice(0, 4);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {displayedMovies.map((movie) => (
        <div className="carousel-item" key={movie.id}>
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </div>
      ))}
    </Slider>
  );
};

export default MovieCarousel;
