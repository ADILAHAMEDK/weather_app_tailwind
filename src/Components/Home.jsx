import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  let InputSearchHandle = (event) => {
    setLocation(event.target.value);
  };

  const SearchButtonLocation = async () => {
    const API_KEY = "7c3b9aa129e5f57dfdbf473406742942";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    console.log(response);
    setData(response.data);
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px]
             text-lg rounded-3xl border border-gray-200 text-gray-600
              placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter location"
          value={location}
          onChange={InputSearchHandle}
        />
        <button
          onClick={SearchButtonLocation}
          className="ml-4 text-lg text-white bg-cyan-800 rounded-lg px-2"
        >
          Search
        </button>
      </div>

      <Weather apiData={data} />
    </div>
  );
};

export default Home;
