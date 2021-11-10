import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddMovie({ movies }, { setMovies }) {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    console.log("adiing", name, pic, rating, summary);
    const newMovie = { name, pic, rating, summary };
    console.log(newMovie);
    // copy movie list & then add new movie
    setMovies([...movies, newMovie]);

  };
  return (
    <div className="Addmovies">
      <TextField value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="enter movie name" variant="standard"  />
        
      <TextField value={pic}
        onChange={(event) => setPic(event.target.value)}
         placeholder="enter movie poster" variant="standard" />
      <TextField value={rating}
        onChange={(event) => setRating(event.target.value)}
         placeholder="enter movie rating" variant="standard" />
      <TextField value={summary}
        onChange={(event) => setSummary(event.target.value)} 
        placeholder="enter movie summary" variant="standard" />
      <Button onClick={addMovie} variant="outlined" >add movie</Button>
      
    </div>
  );
}
