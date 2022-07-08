import api from "../api/get"
import React from "react"
import CapitalsInfo from "./CapitalsInfo"
import cityListData from "./cityListData"
import SearchBar from "./SearchBar"
import CityInfo from "./CityInfo"

export default function Main() {
  async function fetchApi(city) {
    try {
      const response = await api.get(city.apiCityId)
      city.nameState = response.data.results.city
      city.currentWind = response.data.results.wind_speedy
      city.dayNight = response.data.results.currently
      city.min = response.data.results.forecast[0].min
      city.max = response.data.results.forecast[0].max
      city.currentTemp = response.data.results.temp
      city.currentCondition = response.data.results.description
      city.currentHumity = response.data.results.humidity
      city.dayTwoMin = response.data.results.forecast[1].min
      city.dayTwoMax = response.data.results.forecast[1].max
      city.dayThreeMin = response.data.results.forecast[2].min
      city.dayThreeMax = response.data.results.forecast[2].max
      city.dayFourMin = response.data.results.forecast[3].min
      city.dayFourMax = response.data.results.forecast[3].max
      city.dayFiveMin = response.data.results.forecast[4].min
      city.dayFiveMax = response.data.results.forecast[4].max
      city.daySixMin = response.data.results.forecast[5].min
      city.daySixMax = response.data.results.forecast[5].max
    } catch (err) {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else {
        console.log(`Error: ${err.message}`)
      }
    }
    console.log("fetchApi used")
    return city
  }
  const [count, setCount] = React.useState(0)
  const [searchCityInfo, setSeachCityInfo] = React.useState("")
  

  return (
    <main>
      <div className="title-city-input">
        <div className="title">
          <h1>Previsão do Tempo</h1>
        </div>
        <CityInfo searchCityInfo={searchCityInfo} fetchApi={fetchApi} />
        <SearchBar
          placeholder="Insira aqui o nome da cidade"
          data={cityListData}
          setSeachCityInfo={setSeachCityInfo}
        />
      </div>
      <div className="capitals capitals-grid">
        <div className="capitals capitals-text">
          <h2>Capitais</h2>
        </div>
        <div className="capitals capitals-gridtitle gridtitle-min">Min</div>
        <div className="capitals capitals-gridtitle gridtitle-max">Max</div>
        <div className="capitals capitals-gridtitle gridtitle-city">Cidade</div>
        <div className="capitals capitals-gridtitle gridtitle-min">Min</div>
        <div className="capitals capitals-gridtitle gridtitle-max">Max</div>
        <div className="capitals capitals-gridtitle gridtitle-city">Cidade</div>

        <CapitalsInfo fetchApi={fetchApi} />
      </div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </main>
  )
}
