import React from "react";

export default function CityInfo({searchWord}) {
    return <div className="cityInfoContainer">
        <div className="cityTitle">Niterói, RJ - Brasil</div>
        <div className="cityCurrentTemp">20ºC Nublado</div>
        <div className="cityOtherInfoContainer">
            <div className="minMaxContainer">
                <div className="minMaxContainer min">16º</div>
                <div className="minMaxContainer min">25º</div>
            </div>
            <div className="windHumidity">
                <div className="windHumidity wind">Vento: 18km/h</div>
                <div className="windHumidity humidity">89%</div>
            </div>

        </div>
    </div>
}