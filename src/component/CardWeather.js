import * as React from "react";
import { useState, useEffect } from "react";
//axios
import axios from "axios";

// One Card
import CardWeatherOne from "./CardWeatherOne";
export default function BasicCard() {
  // const [temp, setTemp] = useState({
  //   tempNumber: null,
  //   tempMin: null,
  //   tempMax: null,
  //   description: "",
  // });
  const [data, setData] = useState([]);
  useEffect(() => {
    // setDateToday(moment().format("L"));
    (async () => {
      try {
        const response = await axios.get(
          "https://api.shecodes.io/weather/v1/forecast?query=Casablanca&key=b03a640e5ef6980o4da35b006t5f2942&units=metric"
        );

        // handle success
        // let tempNumber = Math.round(response.data.main.temp - 273.15);
        // let tempMin = Math.round(response.data.main.temp_min - 273.15);
        // let tempMax = Math.round(response.data.main.temp_max - 273.15);
        // let description = response.data.weather[0].description;
        // let icon = response.data.weather[0].icon;
        // console.log(icon);
        // setTemp({
        //   tempNumber: tempNumber,
        //   tempMin: tempMin,
        //   tempMax: tempMax,
        //   description: description,
        //   icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        // });
        setData(response.data.daily.splice(0, 4));
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <div
        className="allCardWea"
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "rgb(223, 176, 176)",
        }}
      >
        {/* date,tem,minTemp,maxTemp */}
        {/* <h1>{data.length}</h1> */}
        {data.map((item, i) => {
          // const temparture = item.temperature;
          // const condition = item.condition;
          const {temperature:temparture,condition} = item;
          const toDay = new Date();
          let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          toDay.setDate(toDay.getDate() + i);
          return (
            <CardWeatherOne
              tem={Math.round(temparture.day)}
              minTemp={Math.round(temparture.minimum)}
              maxTemp={Math.round(temparture.maximum)}
              desc={condition.description}
              image={condition.icon_url}
              date={toDay.toLocaleDateString("fr-FR", options)}
            />
          );
        })}
        {/* <CardWeatherOne date="12/12/12" tem="12" minTemp="11" maxTemp="29" />

        <CardWeatherOne />
        <CardWeatherOne />
        <CardWeatherOne /> */}
      </div>
    </div>
  );
}
