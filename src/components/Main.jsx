import api from "../api/get"
import React from "react"

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
      apiCityId: "riodejaneiro,RJ",
      min: "-",
      max: "-",
      cityName: "Salvador",
    },
    {
      apiCityId: "riodejaneiro,RJ",
      min: "-",
      max: "-",
      cityName: "Curitiba",
    },
    {
      apiCityId: "riodejaneiro,RJ",
      min: "-",
      max: "-",
      cityName: "Fortaleza",
    },
    {
      apiCityId: "riodejaneiro,RJ",
      min: "-",
      max: "-",
      cityName: "Manaus",
    },
    {
      apiCityId: "riodejaneiro,RJ",
      min: "-",
      max: "-",
      cityName: "João Pessoa",
    },
  ])
  console.log(cityData)
  const [cityStatus, setCityStatus] = React.useState("idle")

  React.useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await api.get("Salvador,BA")
        setCityData(response.data.results.city_name)
        setCityStatus("resolved")
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
    console.log(cityData)
  }, [])
  return (
    <main>
      {cityStatus === "resolved" && <div>{JSON.stringify(cityData)}</div>}
      <div className="title-city-input">
        <div className="title">
          <h1>Previsão do Tempo</h1>
        </div>
        <form>
          <input
            className="input"
            type="text"
            placeholder="Insira aqui o nome da cidade"
            onChange=""
            name="cidade"
          ></input>
        </form>
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
        <div className="capitals capitals-city city-name2">Rio de Janeiro</div>
        <div className="capitals capitals-city city-min1">8º</div>
        <div className="capitals capitals-city city-max1">8º</div>
        <div className="capitals capitals-city city-name1">Rio de Janeiro</div>
        <div className="capitals capitals-city city-min2">19º</div>
        <div className="capitals capitals-city city-max2">19º</div>
        <div className="capitals capitals-city city-name2">Rio de Janeiro</div>
      </div>
    </main>
  )
  // return <>{cityData && <main>{JSON.stringify(cityData)}</main>}</>
}
