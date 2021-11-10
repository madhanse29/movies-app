import { useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import {Counter } from "./counter"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function App() {
  
  const INTIAL_MOVIES=[
    
 {name: "The Godfather",
  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvhBjZEsw78Uakd3XwKXs-16xmFpTPvCAFQ&usqp=CAU",
 rating:9.2 ,summary:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."},
 {name: "Into The Wild ",
  pic:"http://assets.nflxext.com/us/boxshots/hd1080/70075064.jpg",
 rating:8.1 ,summary:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life."},
 {name: "Life Is Beautiful",
  pic:"https://cdn.shopify.com/s/files/1/0969/9128/products/LifeIsBeautiful_LaVieEstBelle_-RobertoBenigni-HollywoodCultClassicMoviePoster2_1d40c416-e19f-4d2b-a8e1-1a6bfc8abf15.jpg?v=1612861114",
 rating:8.6,summary:"When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp."},
 {name: "Apocalypse Now",
  pic:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8c0b0abb43518bc7a6ba0f58587e886452ac16f2ced47699f0deb6253d49656e._RI_V_TTW_.jpg",
 rating:8.4 ,summary:"A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god."},
 {name: "Pulp Fiction",
  pic:"https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_as_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_Collection_e99004c1-770f-4b07-a815-49047c053de2.jpg?v=1572088123",
 rating:8.9 ,summary:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."},
 {name: "The Shining",
  pic:"https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
 rating:8.4 ,summary:"A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."},
 ]



const[movies,setMovies]=useState(INTIAL_MOVIES)

  return ( 
    
    <div className="App">
      <nav>
<Link to="/">Home</Link>
<Link to= "/movies">Movies</Link>
<Link to= "/addmovies">Addmovies</Link>
<Link to= "/colorgame">Color games</Link>
</nav>
<Switch>
  <Route path="/movies">
  <div className="App1">
     {movies.map((nm)=>(<Msg name={nm.name}
      pic={nm.pic} rating={nm.rating} summary={nm.summary}/>))}
   {/* <AddColor /> */}
   </div>
  </Route>
  <Route path="/addmovies">
  <AddMovie movies={movies} setMovies={setMovies}/>
  </Route>
  <Route path="/colorgame">
    <AddColor/>
  </Route>
  <Route path="/">Welcome </Route>
  </Switch>
   </div>
   
    
  );
}

function AddMovie({movies,setMovies}){
  const[name,setName]=useState("")
const[pic,setPic]=useState("")
const[rating,setRating]=useState("")
const[summary,setSummary]=useState("")

const addMovie=()=>{
  console.log("adiing",name,pic,rating,summary);
  const newMovie = {name,pic,rating,summary}
  console.log(newMovie);
  // copy movie list & then add new movie
  setMovies([...movies,newMovie]) 

}
  return(
  <div className="Addmovies">
    <input value={name}
      onChange={(event)=>setName(event.target.value)}
       placeholder="enter movie name"/>
    <input value={pic}
      onChange={(event)=>setPic(event.target.value)} placeholder="enter movie poster"/>
    <input value={rating}
      onChange={(event)=>setRating(event.target.value)} placeholder="enter movie rating"/>
    <input value={summary}
      onChange={(event)=>setSummary(event.target.value)} placeholder="enter movie summary"/>
    <button onClick={addMovie}>add movie</button>
    </div>
  )
}

function Msg({name,pic,rating,summary}) {

  const[show ,setShow]= useState(true)
  //conditional styling
  const styles={ color : rating < 8.5 ? "crimson" : "green" , fontWeight: "bold" ,};
  const summaryStyles ={
   display: show ? "block" : "none",
  }
  return(
  
    <div className="movies ">
      
      <img className="profpic" src={pic} alt={name}/>
      <div className="specs">
      <h3 className="head">{name}</h3>
      <p className="movie-rating" style={styles}>⭐:{rating}</p>
      </div>
      <IconButton 
      onClick={()=>setShow(!show)} className="hideButton" aria-label="delete">
 {show ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
  </IconButton>
      <p style={summaryStyles} className = "summary">{summary}</p>
      <Counter/>
     
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
