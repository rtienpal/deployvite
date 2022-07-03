export default function CapitalsInfo({ cityData }) {
  let count = 1
  const capitalsInfo = cityData.map((city) => {
    count++
    if (count % 2 === 0) {
      return (
        <>
          <div
            className="capitals capitals-city city-min1"
            key={`${count}${city.cityName}`}
          >
            {city.min}
          </div>
          <div
            className="capitals capitals-city city-max1"
            key={`${count + 1}${city.cityName}`}
          >
            {city.max}
          </div>
          <div
            className="capitals capitals-city city-name1"
            key={`${city.cityName}`}
          >
            {city.cityName}
          </div>
        </>
      )
    } else {
      return (
        <>
          <div
            className="capitals capitals-city city-min2"
            key={`${count}${city.cityName}`}
          >
            {city.min}
          </div>
          <div
            className="capitals capitals-city city-max2"
            key={`${count + 1}${city.cityName}`}
          >
            {city.max}
          </div>
          <div
            className="capitals capitals-city city-name2"
            key={`${city.cityName}`}
          >
            {city.cityName}
          </div>
        </>
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
