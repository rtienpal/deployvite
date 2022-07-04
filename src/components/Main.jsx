import api from "../api/get"
import React from "react"
import CapitalsInfo from "./CapitalsInfo"
import CapitalsInfoFallback from "./CapitalsInfoFallback"
import cityListData from "./cityListData"
import SearchBar from "./SearchBar"

export default function Main() {
  const [cityData, setCityData] = React.useState([
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
  const [cityStatus, setCityStatus] = React.useState("idle")
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    setCityStatus("idle")
    setCityData((prevState) => {
      prevState.map((city) => {
        const newArray = city
        const fetchApi = async () => {
          try {
            const response = await api.get(city.apiCityId)
            newArray.min = response.data.results.forecast[0].min
            newArray.max = response.data.results.forecast[0].max
          } catch (err) {
            if (err.response) {
              console.log(err.response.data)
              console.log(err.response.status)
              console.log(err.response.headers)
            } else {
              console.log(`Error: ${err.message}`)
            }
          }
        }
        fetchApi()
        return newArray
      })
      return prevState
    })
    setCityStatus("resolved")
  }, [cityStatus])

  return (
    <main>
      <div className="title-city-input">
        <div className="title">
          <h1>Previsão do Tempo</h1>
        </div>
        <SearchBar
          placeholder="Insira aqui o nome da cidade"
          data={cityListData}
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
        {cityStatus === "resolved" ? (
          <CapitalsInfo cityData={cityData} />
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
