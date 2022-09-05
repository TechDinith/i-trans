import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import ImageSlider from "./imageslider";

const images = [
  "images/E_Clothing_Solution_Screens/ecss_1.jpg",
  "images/E_Clothing_Solution_Screens/ecss_2.jpg",
  "images/E_Clothing_Solution_Screens/ecss_3.jpg",
  "images/E_Clothing_Solution_Screens/ecss_4.jpg",
  "images/E_Clothing_Solution_Screens/ecss_5.jpg",
  "images/E_Clothing_Solution_Screens/ecss_6.jpg",
  "images/E_Clothing_Solution_Screens/ecss_7.jpg",
  "images/E_Clothing_Solution_Screens/ecss_8.jpg",
  "images/E_Clothing_Solution_Screens/ecss_9.jpg",
  "images/E_Clothing_Solution_Screens/ecss_10.jpg",
];

export default function PreWorks() {
  return (
    <Grid container>
      <Grid item xs={12} component={Paper} elevation={6} p="1%">
        <Divider variant="middle">
          <Typography variant="h5">
            <b>Pre - Works</b>
          </Typography>
        </Divider>
        <Grid item xs={12} mt="1%" display="flex" justifyContent="center">
          <Grid item xs={11} component={Paper} elevation={20} p="1%">
            <Typography variant="h6">E-Commerce Web-App</Typography>
            <ImageSlider images={images} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
