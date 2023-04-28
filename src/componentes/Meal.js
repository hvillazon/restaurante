import React ,{useState} from "react";
import Mealitem from "./Mealitem";
const Meal=()=>{
  const[search, setSearch]=useState("");
  const[Mymeal,setMeal]=useState();
  const searchMeal=(evt)=>{
    if (evt.key=="Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
        setMeal(data.meals)
      })

    }
  }
      return(
        <div className="main">
        <div className="heading">
          <h1>Busca la receta de tu comida</h1>

        </div>
        <br></br>


        <div className="container">
        <input type="search" className="form-control" placeholder="Buscar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}>

        </input>
        </div>
        <br></br>
        <br></br>

        <br></br>


        <div className="container">
        {
          (Mymeal==null)? <p>No encontrado</p> : Mymeal.map((res)=>{
            return(
              <Mealitem data={res}/>
            )
          }

          )
        }




        </div>
</div>



      )
}
export default Meal;
