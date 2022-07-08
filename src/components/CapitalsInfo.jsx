import React from "react"
import CapitalsInfoFallback from "./CapitalsInfoFallback"
export default function CapitalsInfo({fetchApi}) {
  
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
          <div className="capitals capitals-city city-min2">{city.min}</div>
          <div className="capitals capitals-city city-max2">{city.max}</div>
          <div className="capitals capitals-city city-name2">
            {city.cityName}
          </div>
        </div>
      )
    }
  })

  return (
    <>
      {citiesStatus === "resolved" ? (
        capitalsInfo 
      ) : (
        <CapitalsInfoFallback />
      )}
    </>
  )
}

/* <div className="capitals capitals-city city-min1">1º</div>
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
      <div className="capitals capitals-city city-name2">Rio de Janeiro</div> */
