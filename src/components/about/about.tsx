import React from "react";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "@mui/material/Button";

export default function About() {
  return (
    <>
      <Typography variant="h2">
        <b>About</b> <InfoIcon />
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Typography width="100%" variant="h5" textAlign="center">
          We're a team of freelancers!
        </Typography>
        <Typography width="100%" variant="h5" textAlign="center">
          We can say, We are a <b>team of work</b>, that treats{" "}
          <b>your work as our own</b>.
        </Typography>
        <Typography width="100%" variant="h5" textAlign="center">
          We've just started <b>iTrans</b>, So we would like to hear from you
          about us after getting your job done!
        </Typography>
        <Button variant="outlined" size="large" color="secondary">
          <AnchorLink
            to="/#contact"
            title="Get Started!"
            className="about-anchor "
            stripHash
          />
        </Button>
      </Grid>
    </>
  );
}
