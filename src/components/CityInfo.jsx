import React from "react"
import CityInfoFallBack from "./CityInfoFallBack"

export default function CityInfo({ searchCityInfo, fetchApi }) {
  const [countTwo, setCountTwo] = React.useState(0)
  const [cityTwo, setCityTwo] = React.useState({
    apiCityId: "recife,pe",
  })

  React.useEffect(() => {
    const newCity = fetchApi(cityTwo)
    setCityTwo(newCity)
  }, [])
  // console.log(cityTwo)
  return (
    <CityInfoFallBack />
  )
  
  // (
  //   <div className="cityInfoContainer">
  //     <div className="cityTitle">
  //       <h3>{cityTwo.nameState} - Brasil</h3>
  //       <button onClick={() => setCountTwo((prevState) => prevState + 1)}>
  //         {countTwo}
  //       </button>
  //     </div>
  //     <div className="cityCurrentTemp">
  //       <h1>
  //         {cityTwo.currentTemp}º {cityTwo.dayNight}
  //       </h1>
  //     </div>
  //     <div className="cityOtherInfoContainer">
  //       <div className="minMaxDay">
  //         <div className="minMax">
  //           Min: <span style={{ fontWeight: "bold" }}>{cityTwo.min}º</span> Max:{" "}
  //           <span style={{ fontWeight: "bold" }}>{cityTwo.max}º</span>
  //         </div>
  //         <div className="day">{cityTwo.currentCondition}</div>
  //       </div>
  //       <div className="windHumidity">
  //         <div className="windHumidity wind">
  //           Vento:{" "}
  //           <span style={{ fontWeight: "bold" }}>{cityTwo.currentWind}</span>
  //         </div>
  //         <div className="windHumidity humidity">
  //           Humidade:{" "}
  //           <span style={{ fontWeight: "bold" }}>{cityTwo.currentHumity}%</span>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="cityNextTemp">
  //       <div className="cityNextTempDay dayTwo">
  //         <div className="day">Sexta</div>
  //         <div className="temp">18º 26º</div>
  //       </div>
  //       <div className="cityNextTempDay dayThree">
  //         <div className="day">Sabado</div>
  //         <div className="temp">18º 26º</div>
  //       </div>
  //       <div className="cityNextTempDay dayFour">
  //         <div className="day">Domingo</div>
  //         <div className="temp">18º 26º</div>
  //       </div>
  //       <div className="cityNextTempDay dayFive">
  //         <div className="day">Segunda</div>
  //         <div className="temp">18º 26º</div>
  //       </div>
  //       <div className="cityNextTempDay daySix">
  //         <div className="day">Terça</div>
  //         <div className="temp">18º 26º</div>
  //       </div>
  //     </div>
  //   </div>
  // )
}
