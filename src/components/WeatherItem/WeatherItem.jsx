import React from "react";


const WeatherItem = ({item}) =>{
    return(
        <div>
            <img src={`http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`} alt=""/>
            <span>{item?.dt_txt}</span>
            <h3>{item?.weather[0].description}</h3>
            <div>
                <span>{Math.floor(item?.main?.temp_max)}</span>
                <span>{Math.floor(item?.main?.temp_min)}</span>
            </div>
        </div>
    )

}
export default WeatherItem