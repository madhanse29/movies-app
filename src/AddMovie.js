import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as Yup from 'yup';

export function AddMovie() {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const formValidationSchema = Yup.object({
    name: Yup.string().required("why not give name"),
    pic: Yup.string().required("why not give pic 😊 ").min(4, "need bigger"),
    rating: Yup.number().required("why not give rating ⭐ ").min(0).max(10),
    summary: Yup.string().required("why not give summary 📽️ ").min(20),
    trailer: Yup.string().required("why not give trailer 📽️ ").min(4),
  });

  const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      pic: "",
      rating: "",
      summary: "",
      trailer: ""
    },
    // validate : validateform,
    validationSchema: formValidationSchema,

    onSubmit: (newMovie) => {
      console.log("on", newMovie);
      addMovie(newMovie);
    }
  });

  const addMovie = (newMovie) => {
    console.log(newMovie);
    //   console.log("adiing",name,pic,rating,summary,trailer);
    //   const newMovie = {name,pic,rating,summary,trailer}
    //   console.log(newMovie);
    //   // copy movie list & then add new movie
    //  // setMovies([...movies,newMovie]) 
    // // history.push("/movies")
    fetch("https://61921f11aeab5c0017105d60.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => history.push("/movies"));

  };
  return (
    <form onSubmit={handleSubmit} className="Addmovies">

      <TextField id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        label="enter movie name"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
        variant="standard" />

      <TextField id="pic"
        name="pic"
        value={values.pic}
        onChange={handleChange}
        onBlur={handleBlur}
        label="enter movie poster"
        error={errors.pic && touched.pic}
        helperText={errors.pic && touched.pic && errors.pic}
        variant="standard" />

      <TextField id="rating"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        label="enter movie rating"
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating && errors.rating}
        variant="standard" />


      <TextField id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        label="enter movie summary"
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary && errors.summary}
        variant="standard" />

      <TextField id="trailer"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        label="enter movie trailer url"
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer}
        variant="standard" />

      <Button type="submit" variant="outlined">add movie</Button>

    </form>
  );
}
