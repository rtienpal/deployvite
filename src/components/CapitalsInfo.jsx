export default function CapitalsInfo({ citiesData }) {
  let count = 1
  const capitalsInfo = citiesData.map((city) => {
    count++
    if (count % 2 === 0) {
      return (
        <div className="nested" key={city.cityName}>
          <div className="capitals capitals-city city-min1">{city.min}</div>
          <div className="capitals capitals-city city-max1">{city.max}</div>
          <div className="capitals capitals-city city-name1">
            {city.cityName}
          </div>
        </div>
      )
    } else {
      return (
        <div className="nested" key={city.cityName}>
          <div
            className="capitals capitals-city city-min2"
          >
            {city.min}
          </div>
          <div
            className="capitals capitals-city city-max2"
          >
            {city.max}
          </div>
          <div
            className="capitals capitals-city city-name2"
          >
            {city.cityName}
          </div>
        </div>
      )
    }
  })
  return (
    <>
      {capitalsInfo}
      {/* <div className="capitals capitals-city city-min1">1º</div>
      <div className="capitals capitals-city city-max1">8º</div>
      <div className="capitals capitals-city city-name1">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min2">19º</div>
      <div className="capitals capitals-city city-max2">19º</div>
      <div className="capitals capitals-city city-name2">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min1">8º</div>
      <div className="capitals capitals-city city-max1">8º</div>
      <div className="capitals capitals-city city-name1">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min2">19º</div>
      <div className="capitals capitals-city city-max2">19º</div>
      <div className="capitals capitals-city city-name2">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min1">8º</div>
      <div className="capitals capitals-city city-max1">8º</div>
      <div className="capitals capitals-city city-name1">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min2">19º</div>
      <div className="capitals capitals-city city-max2">19º</div>
      <div className="capitals capitals-city city-name2">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min1">8º</div>
      <div className="capitals capitals-city city-max1">8º</div>
      <div className="capitals capitals-city city-name1">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min2">19º</div>
      <div className="capitals capitals-city city-max2">19º</div>
      <div className="capitals capitals-city city-name2">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min1">8º</div>
      <div className="capitals capitals-city city-max1">8º</div>
      <div className="capitals capitals-city city-name1">Rio de Janeiro</div>
      <div className="capitals capitals-city city-min2">19º</div>
      <div className="capitals capitals-city city-max2">19º</div>
      <div className="capitals capitals-city city-name2">Rio de Janeiro</div> */}
    </>
  )
}
