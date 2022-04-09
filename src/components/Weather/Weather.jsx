import React from "react";
import HoursForcast from "../HoursForcast/HoursForcast";

const Weather = ({data}) =>{
    return(
        <div className={`content-container`}>
            <div>
                <h2>{data?.city?.country}</h2>
                <h1>{data?.city?.name}</h1>
            </div>
            <div>
                <p>sunrise : <span>{new Date(data?.city.sunrise).toLocaleTimeString()}</span></p>
                <p>sunrise : <span>{new Date(data?.city.sunset).toLocaleTimeString()}</span></p>
                <div>{data?.list[0]?.wind?.speed}</div>
                <div>{Math.floor(data?.list[0]?.main?.feels_like)}</div>
                <div>{Math.floor(data?.list[0]?.main?.humidity)}</div>
                <div>{Math.floor(data?.list[0]?.main?.pressure)}</div>
            </div>
            <HoursForcast data={data}/>
        </div>
    )
}

export default Weather