function WeatherDisplay(props) {
  const { name, temp, feelsLike, description } = props
  return (
    <div className="WeatherDisplay">
      <h1>Weather in {name}</h1>
      <h2>{temp}</h2>
      <small>Feels Like: {feelsLike}</small>
      <p>{description}</p>
    </div>
  )
}

export default WeatherDisplay