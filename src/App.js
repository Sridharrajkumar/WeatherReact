import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import classes from './App.module.css';
import Items from "./components/Items";
import cloud from "./Image/clouds.png";
import clear from "./Image/clear.png";
import drizzle from "./Image/drizzle.png";
import mist from "./Image/mist.png";
import rain from "./Image/rain.png";
import snow from "./Image/snow.png";
import haze from "./Image/haze.png";



function App() {

  const[detail,setDetail]=useState({
      celcius:38,
      name:'Chennai',
      humidity:30,
      speed: 23,
      image:cloud
  });
  const [city, setCity] = useState("");

  const ApiKey="18db8d10d91602920bce61e6c35289cc";
  const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


  const handleClick = () => {
    console.log("clicked");
    if(city !== "")
    {
      async function fetchData() {
          try {
            let response = await fetch(`${ApiUrl}${city}&appid=${ApiKey}`);
            //console.log(response);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            //console.log('fetching data');
            let jsonResponse = await response.json();
            console.log(jsonResponse.weather[0].main);
            let imagePath = '';
            switch (jsonResponse.weather[0].main) {
              case "Clouds":
                imagePath = cloud;
                break;
              case "Snow":
                imagePath = snow;
                break;
              case "Rain":
                imagePath = rain;
                break;
              case "Mist":
                imagePath = mist;
                break;
              case "Clear":
                imagePath = clear;
                break;
              case "Drizzle":
                imagePath = drizzle;
                break;
              case "Haze":
                imagePath = haze;
                break;
              default:
                imagePath = cloud;
                break;
            }
            
            
            
            
            
            
            
            setDetail(prevState => ({
              ...prevState,
              celcius: Math.round(jsonResponse.main.temp),
              name: jsonResponse.name,
              humidity: jsonResponse.main.humidity,
              speed: jsonResponse.wind.speed,
              image:imagePath
            }))
          }
          catch (error) {
            alert(`Something went wrong ${error}. Please check your internet connection`);
          }
        }
      fetchData();
    }
    
  }
  

  
  return (
    <div className={classes.container}>
      <SearchBar setCity={setCity} handleClick={handleClick} />
      <Items
        celcius={detail.celcius}
        name={detail.name}
        humidity={detail.humidity}
        speed={detail.speed}
        image={detail.image}
      />
    </div>
  );
    
}

export default App;
