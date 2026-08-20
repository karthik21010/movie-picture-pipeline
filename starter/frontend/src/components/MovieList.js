import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_MOVIE_API_URL}/movies`;

    console.log('Movies API:', apiUrl);

    axios
      .get(apiUrl)
      .then((response) => {
        console.log('Movies response:', response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.error('Movies API error:', error);
        setError('Unable to load movies.');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li
          className="movieItem"
          key={movie.id}
          onClick={() => onMovieClick(movie)}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;