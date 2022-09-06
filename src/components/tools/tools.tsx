import React from "react";
import Typography from "@mui/material/Typography";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { StaticImage } from "gatsby-plugin-image";

export default function Tools() {
  return (
    <>
      <Typography variant="h2">
        <b>Tools</b> <AutoFixHighIcon />
      </Typography>

      <StaticImage src="../../images/coming-soon.jpg" alt="comingsoon" />
    </>
  );
}
