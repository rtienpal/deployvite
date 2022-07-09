import React from "react"

export default function CityInfo({ cityTwo }) {

  return (
    <div className="cityInfoContainer">
      <div className="cityTitle">
        <h3>{cityTwo.nameState} - Brasil</h3>
      </div>
      <div className="cityCurrentTemp">
        <h1>
          {cityTwo.currentTemp}º {cityTwo.dayNight}
        </h1>
      </div>
      <div className="cityOtherInfoContainer">
        <div className="minMaxDay">
          <div className="minMax">
            Min: <span style={{ fontWeight: "bold" }}>{cityTwo.min}º</span> Max:{" "}
            <span style={{ fontWeight: "bold" }}>{cityTwo.max}º</span>
          </div>
          <div className="day">{cityTwo.currentCondition}</div>
        </div>
        <div className="windHumidity">
          <div className="windHumidity wind">
            Vento:{" "}
            <span style={{ fontWeight: "bold" }}>{cityTwo.currentWind}</span>
          </div>
          <div className="windHumidity humidity">
            Humidade:{" "}
            <span style={{ fontWeight: "bold" }}>{cityTwo.currentHumity}%</span>
          </div>
        </div>
      </div>
      <div className="cityNextTemp">
        <div className="cityNextTempDay dayTwo">
          <div className="day">{cityTwo.dayTwoDay}</div>
          <div className="temp">{cityTwo.dayTwoMin}º {cityTwo.dayTwoMax}º</div>
        </div>
        <div className="cityNextTempDay dayThree">
        <div className="day">{cityTwo.dayThreeDay}</div>
          <div className="temp">{cityTwo.dayThreeMin}º {cityTwo.dayThreeMax}º</div>
        </div>
        <div className="cityNextTempDay dayFour">
        <div className="day">{cityTwo.dayFourDay}</div>
          <div className="temp">{cityTwo.dayFourMin}º {cityTwo.dayFourMax}º</div>
        </div>
        <div className="cityNextTempDay dayFive">
        <div className="day">{cityTwo.dayFiveDay}</div>
          <div className="temp">{cityTwo.dayFiveMin}º {cityTwo.dayFiveMax}º</div>
        </div>
        <div className="cityNextTempDay daySix">
        <div className="day">{cityTwo.daySixDay}</div>
          <div className="temp">{cityTwo.daySixMin}º {cityTwo.daySixMax}º</div>
        </div>
      </div>
    </div>
  )
}
