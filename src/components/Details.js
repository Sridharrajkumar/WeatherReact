import React from 'react'
import humidityimg from '../Image/humidity.png'
import windimg from '../Image/wind.png'
import classes from './Details.module.css'

const Details = ({humidity,speed}) => {
  return (
    <div className={classes.details}>
        <div className={classes.col}>
            <img src={humidityimg} alt="H"/>
            <div>
                  <p className={classes.humidity}>{humidity}%</p>
                <p>Humidity</p>
            </div>
        </div>
        <div className={classes.col}>
            <img src={windimg} alt="W"/>
            <div>
                  <p className={classes.wind}>{speed}km/h</p>
                <p>Wind Speed</p>
            </div>
        </div>

    </div>
  )
}

export default Details