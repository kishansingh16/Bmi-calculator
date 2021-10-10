import { useState } from "react";
import "./App.css";


export default function App() {
  const [height,setheight]=useState("")
  const [weight,setweight]=useState("")
  const [bmiresult,setbmiresult]=useState()
  const [status,setstatus]=useState("")

  function calculate(){
    let bmi=(weight/(height/100)**2).toFixed(2)

    setbmiresult(bmi);

      if (bmi<18.5) setstatus("UNDERWEIGHT");
      else if(bmi>=18.5 && bmi<24.9) setstatus("NORMAL");
      else if (bmi>=25 && bmi<29.9) setstatus("OVERWEIGHT");
      else setstatus("OBESITY");
  
  }

  return (
    <>
    <div className="App">
     <h1 className="h1">BMI CALCULATOR</h1>
     <form class="container">
       <label  for="height" class="height">HEIGHT</label>
       <input type="number" value={height} placeholder="Height" aria-label="required"  onChange={(e)=>setheight(e.target.value)}>
         </input>

       <label  for="weight" class="weight">WEIGHT</label>
       <input type="number"  value={weight} placeholder="Weight" aria-label="required" onChange={(e)=>setweight(e.target.value)}></input>
         <button type="button" onClick={calculate}>CALCULATE</button> 
         <div className="incenter">
         <h3>Your Condition is :{status}</h3>
         <h3>Your BMI is: {bmiresult}</h3>
         </div>
        
       </form>
       
       
    </div>
    </>
  );
}