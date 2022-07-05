import api from "../api/get"
import React from "react"
import CapitalsInfo from "./CapitalsInfo"
import CapitalsInfoFallback from "./CapitalsInfoFallback"
import cityListData from "./cityListData"
import SearchBar from "./SearchBar"
import CityInfo from "./CityInfo"

export default function Main() {
  const [citiesData, setCitiesData] = React.useState([
    {
      apiCityId: "riodejaneiro,RJ",
      min: "-",
      max: "-",
      cityName: "Rio de Janeiro",
    },
    {
      apiCityId: "saopaulo,SP",
      min: "-",
      max: "-",
      cityName: "Sao Paulo",
    },
    {
      apiCityId: "Belo%20Horizonte,MG",
      min: "-",
      max: "-",
      cityName: "Belo Horizonte",
    },
    {
      apiCityId: "brasilia,DF",
      min: "-",
      max: "-",
      cityName: "Brasilia",
    },
    {
      apiCityId: "belem,pa",
      min: "-",
      max: "-",
      cityName: "Belém",
    },
    {
      apiCityId: "salvador,ba",
      min: "-",
      max: "-",
      cityName: "Salvador",
    },
    {
      apiCityId: "curitiba,pr",
      min: "-",
      max: "-",
      cityName: "Curitiba",
    },
    {
      apiCityId: "fortaleza,ce",
      min: "-",
      max: "-",
      cityName: "Fortaleza",
    },
    {
      apiCityId: "manaus,am",
      min: "-",
      max: "-",
      cityName: "Manaus",
    },
    {
      apiCityId: "recife,pe",
      min: "-",
      max: "-",
      cityName: "Recife",
    },
  ])
  const [citiesStatus, setCitiesStatus] = React.useState("idle")
  const [count, setCount] = React.useState(0)
  const [searchWord, setSearchWord] = React.useState("")

  async function fetchApi(city) {
    try {
      const response = await api.get(city.apiCityId)
      city.min = response.data.results.forecast[0].min
      city.max = response.data.results.forecast[0].max
      city.currentTemp = response.data.results.temp
      city.currentCondition = response.data.results.condition_slug
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
    return city
  }
  

  function updateCity(city) {
    const newCity = fetchApi(city)
    setCitiesData((prevState) => {
      const newArray = prevState.map((elem) => {
        if (elem.cityName === newCity.cityName) {
          return [...newCity]
        } else {
          return elem
        }
      })
      return newArray
    })
  }

  React.useEffect(() => {
    setCitiesStatus("idle")
    citiesData.map((city) => {
      updateCity(city)
    })
    setCitiesStatus("resolved")
  }, [])



  return (
    <main>
      <div className="title-city-input">
        <div className="title">
          <h1>Previsão do Tempo</h1>
        </div>
        <CityInfo searchWord={searchWord} />
        <SearchBar
          placeholder="Insira aqui o nome da cidade"
          data={cityListData}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
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
        {citiesStatus === "resolved" ? (
          <CapitalsInfo citiesData={citiesData} />
        ) : (
          <CapitalsInfoFallback />
        )}
      </div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </main>
  )
}
