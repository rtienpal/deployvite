import React from "react"
export default function CapitalsInfo({
  fetchApi,
  setCityTwo,
  setCityTwoStatus,
}) {
  const [citiesData, setCitiesData] = React.useState([
    {
      apiCityId: "riodejaneiro,RJ",
      min: "-",
      max: "-",
      cityName: "Rio de Janeiro",
    },
    {
      apiCityId: "sao paulo,SP",
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

  async function updateCity(city) {
    const newCity = await fetchApi(city)
    setCitiesData((prevState) => {
      const newArray = prevState.map((elem) => {
        if (elem.cityName === newCity.cityName) {
          return newCity
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
        <div
          className="nested"
          key={city.cityName}
          onClick={() => {
            console.log(city)
            setCityTwo(city)
            setCityTwoStatus("resolved")
          }}
        >
          <div className="capitals capitals-city city-min1">{city.min}</div>
          <div className="capitals capitals-city city-max1">{city.max}</div>
          <div className="capitals capitals-city city-name1">
            {city.cityName}
          </div>
          {/* <span>{JSON.stringify(citiesData)}</span> */}
        </div>
      )
    } else {
      return (
        <div
          className="nested"
          key={city.cityName}
          onClick={() => {
            setCityTwo(city)
            setCityTwoStatus("resolved")
          }}
        >
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
    <>{citiesStatus === "resolved" && capitalsInfo}</>
  )
}


