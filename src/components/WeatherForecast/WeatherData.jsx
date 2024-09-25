import "./WeatherForecast.css"
const WeatherData = (props) =>{
    const {day, img, imgAlt, conditions, time} = props
    return(
      <section>
        <div className="weather">
        <h2>Day of the Week: {day}</h2>
        <img src={img} alt={imgAlt}/>
        <p><span>Conditions: {conditions}</span> current weather conditions </p>
        <p><span>Time: {time}</span>time of day</p>
      </div>
      </section>
    )
}

export default WeatherData