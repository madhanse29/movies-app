import { useEffect, useState } from 'react';
import { Switch, Route ,Redirect,useHistory,useParams } from "react-router-dom";
import './App.css';
import {Counter } from "./counter"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';

import{useFormik} from "formik";
import { Formik } from 'formik';
import { ErrorSharp } from '@mui/icons-material';
import * as Yup from 'yup';

function App() {
  const [mode,SetMode] = useState("dark")
  const history=useHistory();


 const theme = createTheme({
  palette: {
    mode: mode
  },
});

useEffect(()=>{
  fetch("https://61921f11aeab5c0017105d60.mockapi.io/movies")
  .then((data)=>data.json())
  .then ((mvs)=> setMovies(mvs))
},[])
const[movies,setMovies]=useState([])

  return ( 
    <ThemeProvider theme ={theme}>
      <Paper elevation={4} style 
   = {{minHeight:"100vh"}}>
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button onClick={()=>{
        history.push("/")}} variant="text" color="inherit">Home</Button>
        <Button onClick={()=>{
          history.push("/movies")}} variant="text" color="inherit">Movies</Button>
        <Button onClick={()=>{
          history.push("/addmovies")}} variant="text" color="inherit">Addmovies</Button>
        <Button onClick={()=>{
          history.push("/colorgame")}}variant="text" color="inherit">colorgame</Button>
        <Button onClick={()=>{
          history.push("/tictac")}} variant="text" color="inherit"> tictacgame </Button>
        <Button onClick={()=>{
          history.push("/form")}} variant="text" color="inherit"> Basic form </Button>
          <Button style={{marginLeft : "auto "}}
           onClick={()=> SetMode(mode === "light" ? "dark" : "light")}variant="text" color="inherit">
            {mode === "light" ? "dark" : "light"} MODE</Button>
        </Toolbar>
      </AppBar>
    </Box>
<Switch>
<Route exact path="/">
    <Welcome/> </Route>
    <Route path="/films">
      <Redirect to ="/movies"/>
</Route>
<Route path="/movies/edit/:id">
   <MoviesEdits  />
</Route>
    <Route path="/movies/:id">
   <MoviesDetails />
</Route>
    
  <Route path="/movies">
  <MovieList />
  </Route>
  <Route path="/addmovies">
  <AddMovie />
  </Route>
  <Route path="/colorgame">
    <AddColor/>
  </Route>
  <Route path="/tictac">
    <Tictacgame/>
    </Route>
  <Route path="/form">
    <Basicform/>
  </Route>
 <Route path="**">Not found 404</Route>
  </Switch>
   </div>
   </Paper>
   </ThemeProvider>
    
  );
}
// const validateform =(values)=>{
//   console.log(values);
// const errors ={};
//   if (values.email.length < 5){
//    errors.email = "please provide a long"
//   } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)){
//     errors.mail ="invalid email"
//   }

//   if (values.password.length <8){
//    errors.password = "please provide a long"
//   }
//   else if (values.password.length >12){
//    errors.password = "please provide a short"
//   }
//   console.log(errors);
//   return errors;
// }
// function Basicform() {
//   const {handleSubmit,handleBlur,handleChange,values,errors,touched} = useFormik({
//     initialValues : {email:"naven00" , password :"dsd"},
//   validate : validateform,
//   onSubmit: (values)=>{
//     console.log("on",values)
//   }
  
//   })
//   return( <from onSubmit={handleSubmit}>
//     <input id="email"
//     name="email"
//      value={values.email}
//      onChange={handleChange}
//      onBlur={handleBlur}
//       type = "email" placeholder="email"/>
//        {errors.email &&
//   touched.email &&
//   errors.email}
//     <input  id="password"
//     name="password"
//     value={values.password}
//     onBlur={handleBlur}
//     onChange={handleChange}
//      type ="password" placeholder=" enter password"/>
//   {errors.password &&
//  touched.password &&
//   errors.password}
//   <button type="submit" >Submit</button>
//   </from>
//   )
// }
// function Basicform() {
//   const {handleSubmit,handleBlur,handleChange,values,errors,touched} = useFormik({
//     initialValues : {email:"naven00" , password :"dsd"},
//   validate : validateform,
//   onSubmit: (values)=>{
//     console.log("on",values)
//   }
  
//   })
//   return( <from onSubmit={handleSubmit}>
//     <input id="email"
//     name="email"
//      value={values.email}
//      onChange={handleChange}
//      onBlur={handleBlur}
//       type = "email" placeholder="email"/>
//        {errors.email &&
//   touched.email &&
//   errors.email}
//     <input  id="password"
//     name="password"
//     value={values.password}
//     onBlur={handleBlur}
//     onChange={handleChange}
//      type ="password" placeholder=" enter password"/>
//   {errors.password &&
//  touched.password &&
//   errors.password}
//   <button type="submit" >Submit</button>
//   </from>
//   )
// }

const formValidationSchema= Yup.object({
  email : Yup.string().min(5, "need bigger email😒")
  .required()
  .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  "pattern not match"),
  password : Yup.string().min(8, "need bigger password😒")
  .max(12,"password is to long")
  .required(),
})


function Basicform() {
  const {handleSubmit,handleBlur,handleChange,values,errors,touched} = useFormik({
    initialValues : {email:"" , password :""},
 // validate : validateform,
 validationSchema:formValidationSchema ,
 onSubmit: (values)=>{
    console.log("on",values)
  }
  
  })
  return( <from onSubmit={handleSubmit}>
    <input id="email"
    name="email"
     value={values.email}
     onChange={handleChange}
     onBlur={handleBlur}
      type = "email" placeholder="email"/>
       {errors.email &&
  touched.email &&
  errors.email}
    <input  id="password"
    name="password"
    value={values.password}
    onBlur={handleBlur}
    onChange={handleChange}
     type ="password" placeholder=" enter password"/>
  {errors.password &&
 touched.password &&
  errors.password}
  <button type="submit" >Submit</button>
  </from>
  )
}

function Tictacgame(){
  const [board,setBoard]= useState([null,null,null,
  null,null,null,
null,null,null])

const[isXTurn,setIsXTurn] = useState(true);
const handleClick = (index) => {

setIsXTurn(!isXTurn)
}
  return (
    <div className="board">
{board.map((val,index)=> (<Gamebox val={val} onPlayerClick={()=> handleClick(index)} />))}
  </div>
  )
  }

function Gamebox(onPlayerClick,val){
 // const [val,setVal] = useState(null)
  const styles = {color : val === "X" ? "green" : "red"}

  return<div style={styles} 
  onClick={onPlayerClick} className="game-box">{val}</div>
}


function MoviesDetails(){
  
  //const movie = movies[id]
  const history=useHistory();
  const{id} = useParams();
  console.log(id)

const [movie,setMovie] = useState({});
useEffect(()=>{
  fetch(`https://61921f11aeab5c0017105d60.mockapi.io/movies/${id}`,{method:"GET"})
  .then((data)=>data.json())
  .then ((mv)=> setMovie(mv));
},[])
  return(<div className="specs2">
   <iframe width="644" height="362" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h3 className="head">{movie.name}</h3>
  <p className="movie-rating">⭐:{movie.rating}</p>
  <p  className = "summary">{movie.summary}</p>
  <Button  onClick={()=>{
        history.push("/movies")}}  variant="outlined" startIcon={<ArrowBackIcon />}>
 Back
</Button>
  </div>
  ) 
}
function MoviesEdits(){
  
  const{id} = useParams();
  const history=useHistory();
  const[movie,setMovies] = useState(null);
  useEffect(()=>{
    fetch(`https://61921f11aeab5c0017105d60.mockapi.io/movies/${id}`,
    {method:"GET"})
    .then((data)=>data.json())
    .then ((mv)=> setMovies(mv))
  },[])

 // const movie = movies[id];
  //console.log(id,movie)


  return movie ? <UpdateMovie movie={movie}/> : "";
  }
  
  function UpdateMovie({movie}){
    
    const[name,setName]=useState(movie.name)
    const[pic,setPic]=useState(movie.pic)
    const[rating,setRating]=useState(movie.rating)
    const[summary,setSummary]=useState(movie.summary)
    const[trailer,setTrailer]=useState(movie.trailer)
    const history=useHistory();
    const editMovie=()=>{
      const updateMovie = {
        name,
        pic,
        rating
        ,summary
        ,trailer};
     // console.log(updateMovie);
      // copy movie list & then add new movie
     // setMovies([...movies,updateMovie]) 
     //replace the updatemovie in movie list
    // const copyMovie = [...movies];
  //   copyMovie[id] = updateMovie;
  //   setMovies(copyMovie)
  // history.push('/movies')
  fetch(`https://61921f11aeab5c0017105d60.mockapi.io/movies/${movie.id}`,{
    method: "PUT",
    body: JSON.stringify(updateMovie),
    headers: {'Content-Type': 'application/json'},
  }).then(()=>history.push("/movies"));
    };
    
    return(
      <div className="Addmovies">
        <TextField value={name}
          onChange={(event)=>setName(event.target.value)}
           label="enter movie name" variant="outlined"/>
        <TextField value={pic}
          onChange={(event)=>setPic(event.target.value)} label="enter movie poster" variant="outlined"/>
        <TextField value={rating}
          onChange={(event)=>setRating(event.target.value)} label="enter movie rating" variant="outlined"/>
        <TextField value={summary}
          onChange={(event)=>setSummary(event.target.value)} label="enter movie summary" variant="outlined"/>
        <TextField value={trailer}
          onChange={(event)=>setTrailer(event.target.value)} label="enter movie trailer url" variant="outlined"/>
        <Button  onClick={editMovie} variant="outlined">save</Button >
        </div>
      )
  }


function Welcome(){
  return(
    <h3>Welcome to movie</h3>
  )
}
function MovieList(){
  const history=useHistory();
const getMovies = () =>{
  fetch("https://61921f11aeab5c0017105d60.mockapi.io/movies")
  .then((data)=>data.json())
  .then ((mvs)=> setMovies(mvs))
}

  useEffect(getMovies,[])
  const[movies,setMovies]=useState([])
 const deleteMovie = (id)=>{
  fetch(`https://61921f11aeab5c0017105d60.mockapi.io/movies/${id}`
          ,{method:"DELETE"})
          .then(()=>getMovies());
 }
 
 
 return(
<div className="App1">
     {movies.map(({name,rating,summary,pic,id})=>(<Msg 
     name={name}
      pic={pic} 
      rating={rating} 
      summary={summary} 
      id={id}
      editButton={<IconButton  onClick={()=>{
        console.log(name)
        history.push("/movies/edit/"+ id)}}
         aria-label="edit" color="secondary"><EditIcon/></IconButton>} 
      deleteButton={
        <IconButton onClick={()=> deleteMovie(id)} aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>}/>
        ))}
   </div>
  )
}

function AddMovie(){
  const[name,setName]=useState("")
const[pic,setPic]=useState("")
const[rating,setRating]=useState("")
const[summary,setSummary]=useState("")
const[trailer,setTrailer]=useState("")
const history=useHistory();

const addMovie=()=>{
  console.log("adiing",name,pic,rating,summary,trailer);
  const newMovie = {name,pic,rating,summary,trailer}
 
  console.log(newMovie);
  // copy movie list & then add new movie
 // setMovies([...movies,newMovie]) 
// history.push("/movies")
fetch("https://61921f11aeab5c0017105d60.mockapi.io/movies",{
  method: "POST",
  body: JSON.stringify(newMovie),
  headers: {'Content-Type': 'application/json'},
}).then(()=>history.push("/movies"));

}
  return(
  <div className="Addmovies">
    <TextField value={name}
      onChange={(event)=>setName(event.target.value)}
       placeholder="enter movie name" variant="standard"/>
    <TextField value={pic}
      onChange={(event)=>setPic(event.target.value)} placeholder="enter movie poster" variant="standard"/>
    <TextField value={rating}
      onChange={(event)=>setRating(event.target.value)} placeholder="enter movie rating" variant="standard"/>
    <TextField value={summary}
      onChange={(event)=>setSummary(event.target.value)} placeholder="enter movie summary" variant="standard"/>
    <TextField value={trailer}
      onChange={(event)=>setTrailer(event.target.value)} placeholder="enter movie trailer url" variant="standard"/>
    <Button  onClick={addMovie} variant="outlined">add movie</Button >
    </div>
  )
}

function Msg({name,pic,rating,summary,id,editButton ,deleteButton}) {

  const[show ,setShow]= useState(true)
  //conditional styling
  const styles={ color : rating < 8.5 ? "crimson" : "green" , fontWeight: "bold" ,};
  const summaryStyles ={
   display: show ? "block" : "none",
  }
  const history = useHistory();
  return(
  
    <div className="movies ">
      
      <img className="profpic" src={pic} alt={name}/>
      <div className="specs">
      <h3 className="head">{name}</h3>
      <p className="movie-rating" style={styles}>⭐:{rating}</p>
      </div>

      <IconButton 
      onClick={()=>{
        console.log(name);
        history.push("/movies/" + id);
      }} 
      className="infoButton" aria-label="info" color="info"><InfoIcon/>
  </IconButton>
      <IconButton 
      onClick={()=>setShow(!show)} className="hideButton" aria-label="delete">
 {show ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
  </IconButton>
      <p style={summaryStyles} className = "summary">{summary}</p>
      <Counter/>{editButton} {deleteButton}
     
    </div>
  )
  
}

function AddColor() {
  const [color,setColor] = useState("red");
const styles ={ backgroundColor:color}
//const colors = [
const[colors,setColors] = useState(["teal","orange"]);
  return(
    <div className="color-list">
   <TextField value={color}
      onChange={(event)=>setColor(event.target.value)}
      style={styles}  label="enter a color" variant="standard" />
  {/* copy the color list & then add new */}
   <Button onClick={()=> setColors([...colors,color])} variant="outlined">AddColor</Button>

   {colors.map((clr,index)=>(
     <ColorBox key={index} color={clr}/>
   ))}
    </div>
  )
  
}

function ColorBox({ color }){
  const styles = 
  {backgroundColor: color,height:"25px",width:"200px" , marginTop:"10px"}
return(
  <div style={styles}></div>
)
}




export default App;
