import React from "react";

const Weather = ({ apiData }) => {
  console.log(apiData, "all weather data");
  return (
    <div>
      {apiData.weather ? (
        <div className="w-[500px] h-[250px] bg-indigo-400 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center ">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {apiData.name},{apiData.sys.country}
                  </p>
                  <p className="text-sm">{apiData.weather[0].description}</p>
                </div>
                <div>
                  <h1 className="text-6xl font font-semibold">
                    {apiData.main.temp.toFixed()}°C
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img//wn/${apiData.weather[0].icon}@2x.png`}
                  className="w-[120px]"
                />
              </div>

              <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                <div className="flex justify-between gap-x-8">
                  <p>Feels Like</p>
                  <p className="font-bold w-20 ">
                    {apiData.main.feels_like} °C
                  </p>
                </div>
                <div className="flex justify-between gap-x-8">
                  <p>Humidity</p>
                  <p className="font-bold w-20 ">{apiData.main.humidity} %</p>
                </div>
                <div className="flex justify-between gap-x-8">
                  <p>Wind Speed</p>
                  <p className="font-bold w-20 ">{apiData.wind.speed} KPH</p>
                </div>
                <div className="flex justify-between gap-x-8">
                  <p>Pressure</p>
                  <p className="font-bold w-20 ">{apiData.main.pressure} hPa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
