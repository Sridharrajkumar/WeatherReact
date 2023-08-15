import React from 'react'
import classes from './Item.module.css'
import Details from './Details'

const Items = ({celcius,name,humidity,speed,image}) => {
  return (
    <div className={classes.weather}>
        <img src={image} alt='watherimg' className={classes.weathericon} onLoad={() => console.log("Image loaded")}/>
      <h1 className="temp">{celcius}°C</h1>
      <h2 className='city'>{name}</h2>
      <Details humidity={humidity} speed={speed}/>
        
    </div>
  )
}

export default Items
