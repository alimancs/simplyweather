import React from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
   const daysAndData = [
      {day:'Mon',temp:'12 ℃'},
      {day:'Tues',temp:'0 ℃'},
      {day:'Wed',temp:'-0 ℃'},
      {day:'Thurs',temp:'100 ℃'},
      {day:'Fri',temp:'24 ℃'},
      {day:'Sat',temp:'70 ℃'},
      {day:'Sun',temp:'34 ℃'},
  ]
  const locationAndData = [
      {location:'Japan', info:'rainy', windspeed:'50 km/h', humidity:'20%'},
      {location:'Newyork', info:'rainy', windspeed:'10 km/h', humidity:'40%'},
      {location:'Berlin', info:'rainy', windspeed:'2 km/h', humidity:'10.3%'},
      {location:'China', info:'rainy', windspeed:'34 km/h', humidity:'15%'},
      {location:'Russia', info:'rainy', windspeed:'20 km/h', humidity:'10%'},
  ]
  return (
     <div>
        <Background></Background>
        <Navbar></Navbar>
        <Hero days_and_data={daysAndData} location_and_data={locationAndData}></Hero>
     </div>
  );
}

export default App;
