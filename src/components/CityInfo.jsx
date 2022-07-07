import React from "react"

export default function CityInfo({ searchWord }) {
  return (
    <div className="cityInfoContainer">
      <div className="cityTitle"><h3>Niterói, RJ - Brasil</h3></div>
      <div className="cityCurrentTemp"><h1>20ºC Nublado</h1></div>
      <div className="cityOtherInfoContainer">
        <div className="minMaxDay">
          <div className="minMax">Min: <span style={{fontWeight:"bold"}}>16º</span> Max: <span style={{fontWeight:"bold"}}>25º</span></div>
          <div className="day">Noite</div>
        </div>
        <div className="windHumidity">
          <div className="windHumidity wind">Vento: <span style={{fontWeight:"bold"}}>18km/h</span></div>
          <div className="windHumidity humidity">Humidade: <span style={{fontWeight:"bold"}}>89%</span></div>
        </div>
      </div>
      <div className="cityNextTemp">
        <div className="cityNextTempDay dayTwo">
          <div className="day">Sexta</div>
          <div className="temp">18º 26º</div>
        </div>
        <div className="cityNextTempDay dayThree">
          <div className="day">Sabado</div>
          <div className="temp">18º 26º</div>
        </div>
        <div className="cityNextTempDay dayFour">
          <div className="day">Domingo</div>
          <div className="temp">18º 26º</div>
        </div>
        <div className="cityNextTempDay dayFive">
          <div className="day">Segunda</div>
          <div className="temp">18º 26º</div>
        </div>
        <div className="cityNextTempDay daySix">
          <div className="day">Terça</div>
          <div className="temp">18º 26º</div>
        </div>
      </div>
    </div>
  )
}
