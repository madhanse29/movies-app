import { getByPlaceholderText } from '@testing-library/react';
import { useState } from 'react';
import './App.css';

function App() {
  const names=[
    
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

  return (
    <div className="App">
     {names.map((nm)=>(<Msg name={nm.name}
      pic={nm.pic} rating={nm.rating} summary={nm.summary}/>))}
    </div>
  );
}
function Counter(){
  // let like=10;
  //const[state,setState]=useState(Initial value);
  const[like,setLike]=useState(0);
  const[unlike,setUnlike]=useState(0);
  return(
    <div className="counter-container">
      <button className="likes" onClick={()=>{
        setLike(like+1)
      }}>👍{like}</button>
      <button className="likes" onClick={()=>{
        setUnlike(unlike-1)
      }}>👎{unlike}</button>
      
    </div>
  )
}

function Msg({name,pic,rating,summary}) {

  const[show ,setShow]= useState(true)
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
      <button onClick={()=>setShow(!show)} className="hideButton">hide</button>
      <p style={summaryStyles} className = "summary">{summary}</p>
      <Counter/>
    </div>
  )
  
}

export default App;
