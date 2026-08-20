import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails({ movie }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!movie || !movie.id) {
      return;
    }

    const apiUrl = `${process.env.REACT_APP_MOVIE_API_URL}/movies/${movie.id}`;

    console.log('API URL:', apiUrl);

    axios
      .get(apiUrl)
      .then((response) => {
        console.log('API SUCCESS:', response.data);
        setDetails(response.data);
      })
      .catch((error) => {
        console.error('API ERROR:', error);
      });
  }, [movie]);

  if (!details) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div className="movieDetails">
      <h2>{details.movie.title}</h2>
      <p>{details.movie.description}</p>
    </div>
  );
}

export default MovieDetails;
