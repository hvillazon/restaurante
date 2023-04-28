import React from "react";

const Mealitem=(getMeal)=>{
	console.log(getMeal.data)
		return(
			<div className="card">
				<img src={getMeal.data.strMealThumb} className="card-img-top"></img>
				<div className="card-body">
					<h2>{getMeal.data.strMeal}</h2>
					<p className="card-text"> {getMeal.data.strInstructions}</p>
				</div>
			</div>
		)
	}

export default Mealitem;