import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
// Css
import "./cardWeather.css";
//icon
import CloudIcon from "@mui/icons-material/Cloud";
//axios
import axios from "axios";
// library moment Time
import moment from "moment";

import icon from "./img/icon.png";
export default function BasicCard() {
  const [temp, setTemp] = useState({
    tempNumber: null,
    tempMin: null,
    tempMax: null,
    description: "",
  });
  const [dateToday, setDateToday] = useState(null);
  useEffect(() => {
    setDateToday(moment().format("L"));
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=33.5731104&lon=-7.5898434&appid=760a9f4b6086e7b3fc4a29f14b698f88"
      )
      .then(function (response) {
        // handle success
        let tempNumber = Math.round(response.data.main.temp - 273.15);
        let tempMin = Math.round(response.data.main.temp_min - 273.15);
        let tempMax = Math.round(response.data.main.temp_max - 273.15);
        let description = response.data.weather[0].description;
        let icon = response.data.weather[0].icon;
        console.log(icon);
        setTemp({
          tempNumber: tempNumber,
          tempMin: tempMin,
          tempMax: tempMax,
          description: description,
          icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className="allCard">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5">
            Weather Casablanca{" "}
            <span className="dateToDay">
              <em> {dateToday}</em>
            </span>
          </Typography>
          <hr />
          <Grid container>
            <Grid xs={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">{temp.tempNumber}</Typography>
                <img src={temp.icon} alt="" />
              </div>
              <span>{temp.description}</span>
            </Grid>
            <Grid xs={6} style={{ textAlign: "right" }}>
              <img
                src={icon}
                style={{ width: "130px", height: "130px" }}
                alt=""
              />
            </Grid>
          </Grid>
          <div style={{ display: "flex", direction: "left" }}>
            <Typography variant="body2">Min : {temp.tempMin}</Typography>
            <Typography style={{ margin: "0px 5px" }} variant="body2">
              |
            </Typography>
            <Typography variant="body2">Max : {temp.tempMax}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
