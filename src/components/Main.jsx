import api from "../api/get"
import React from "react"
import CapitalsInfo from "./CapitalsInfo"
import cityListData from "./cityListData"
import SearchBar from "./SearchBar"
import CityInfo from "./CityInfo"

export default function Main() {
  function translate(element) {
    if (element === "Sat") {
      return "Sábado"
    } else if (element === "Sun") {
      return "Domingo"
    } else if (element === "Mon") {
      return "Segunda"
    } else if (element === "Tue") {
      return "Terça"
    } else if (element === "Wed") {
      return "Quarta"
    } else if (element === "Thu") {
      return "Quinta"
    } else if (element === "Fri") {
      return "Sexta"
    } else if (element === "night") {
      return "noite"
    } else if (element === "day") {
      return "dia"
    } else if (element === "cloud") {
      return "nublado"
    } else if (element === "rain") {
      return "chuva"
    } else if (element === "clear_day") {
      return "dia limpo"
    } else if (element === "clear_night") {
      return "noite limpa"
    } else if (element === "cloudly_day") {
      return "nublado de dia"
    } else if (element === "cloudly_night") {
      return "nublado de noite"
    } else if (element === "fog") {
      return "neblina"
    } else if (element === "hail") {
      return "granizo"
    } else if (element === "snow") {
      return "neve"
    } else if (element === "storm") {
      return "tempestade"
    }
  }

  async function fetchApi(city) {
    try {
      const response = await api.get(city.apiCityId)
      city.nameState = response.data.results.city
      city.currentWind = response.data.results.wind_speedy
      city.dayNight = translate(response.data.results.currently)
      city.min = response.data.results.forecast[0].min
      city.max = response.data.results.forecast[0].max
      city.currentTemp = response.data.results.temp
      city.currentCondition = translate(response.data.results.condition_slug)
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
      city.dayTwoDay = translate(response.data.results.forecast[1].weekday)
      city.dayThreeDay = translate(response.data.results.forecast[2].weekday)
      city.dayFourDay = translate(response.data.results.forecast[3].weekday)
      city.dayFiveDay = translate(response.data.results.forecast[4].weekday)
      city.daySixDay = translate(response.data.results.forecast[5].weekday)
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
  const [cityTwoStatus, setCityTwoStatus] = React.useState("idle")
  const [cityTwo, setCityTwo] = React.useState({
    apiCityId: "recife,pe",
  })

  return (
    <main>
      <div className="title-city-input">
        <div className="title">
          <h1>Previsão do Tempo</h1>
        </div>
        {cityTwoStatus === "resolved" && <CityInfo cityTwo={cityTwo} />}
        <SearchBar
          placeholder="Insira aqui o nome da cidade"
          data={cityListData}
          fetchApi={fetchApi}
          setCityTwoStatus={setCityTwoStatus}
          setCityTwo={setCityTwo}
          cityTwo={cityTwo}
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

        <CapitalsInfo
          fetchApi={fetchApi}
          setCityTwoStatus={setCityTwoStatus}
          setCityTwo={setCityTwo}
        />
      </div>
    </main>
  )
}
