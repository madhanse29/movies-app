import { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function MoviesDetails() {

  //const movie = movies[id]
  const history = useHistory();
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://61921f11aeab5c0017105d60.mockapi.io/movies/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  return (<div className="specs2">
    <iframe width="644" height="362" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3 className="head">{movie.name}</h3>
    <p className="movie-rating">⭐:{movie.rating}</p>
    <p className="summary">{movie.summary}</p>
    <Button onClick={() => {
      history.push("/movies");
    }} variant="outlined" startIcon={<ArrowBackIcon />}>
      Back
    </Button>
  </div>
  );
}
