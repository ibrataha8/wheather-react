import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CardWeatherOne({
  date,
  tem,
  minTemp,
  maxTemp,
  desc,
  image,
}) {
  return (
    <div className="allCard">
      <Card sx={{ minWidth: 275, background: "#3949ab", color: "white" }}>
        <CardContent>
          <Typography style={{ textAlign: "center" }} variant="h5">
            <b>{date}</b>
          </Typography>
          <hr />

          <Grid container>
            <Grid xs={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">{tem}</Typography>
                {/* <CloudIcon style={{ fontSize: "75px" }} /> */}
              </div>
              <span>{desc}</span>
            </Grid>
            <Grid xs={6} style={{ textAlign: "right" }}>
              <img src={image} alt="" />
            </Grid>
          </Grid>
          <div style={{ display: "flex", direction: "left" }}>
            <Typography style={{ color: "#03a9f4" }} variant="body2">
              Min : {minTemp}
            </Typography>
            <Typography style={{ margin: "0px 5px" }} variant="body2">
              |
            </Typography>
            <Typography style={{ color: "#bf360c" }} variant="body2">
              Max : {maxTemp}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
