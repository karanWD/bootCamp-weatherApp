import React from "react";
import HoursForcast from "../HoursForcast/HoursForcast";

const Weather = ({data}) =>{
    return(
        <div>
            <h1>{data?.city?.name}</h1>
            <h2>{data?.city?.country}</h2>
            <p>sunrise : <span>{data?.city.sunrise}</span></p>
            <p>sunrise : <span>{data?.city.sunset}</span></p>
            <div>{data?.list[0]?.wind?.speed}</div>
            <div>{Math.floor(data?.list[0]?.main?.feels_like)}</div>
            <div>{Math.floor(data?.list[0]?.main?.humidity)}</div>
            <div>{Math.floor(data?.list[0]?.main?.pressure)}</div>
            <HoursForcast data={data}/>
        </div>
    )
}

export default Weather