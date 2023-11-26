import React from "react";
import Quiz from "./component/Quiz";
import { Route,Routes } from 'react-router-dom';
import Test from './component/Pages/Test';
import WeatherComponent from "./component/weather";
import WeatherApp from "./component/weather";



function App() {
  return (
   <div>
      
      <Routes>
          <Route path="/Quiz" element = {<Quiz/>}/>
          <Route path="/test" element = {<Test/>}/>
         

          
          
      </Routes>
    {/* <WeatherApp/> */}
     
     
     
     
    
   
   </div>
  );
}

export default App;
