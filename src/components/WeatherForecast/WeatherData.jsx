const WeatherData = (props) =>{
    const {day, img, imgAlt, conditions, time} = props
    return(
        <div className="weather">
        <h2>Day of the Week: {day}</h2>
        <img src={img} alt={imgAlt}/>
        <p>Current weather conditions: {conditions}</p>
        <p>Time of day: {time}</p>
      </div>
    )
}

export default WeatherData