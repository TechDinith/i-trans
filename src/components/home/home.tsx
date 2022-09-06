import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Logo from "../logo/logo";

export default function Home() {
  return (
    <>
      <Grid item xs={8} md={6} sm={6}>
        <Logo />
      </Grid>

      <Grid item xs={8} md={6} sm={6} display="flex">
        <Divider orientation="vertical" />
        <Typography variant="h2" mt={{ xs: 12, sm: 0, md: 12 }} ml={5}>
          Web solutions for <br />
          <b>Minor</b> and <b>Start-up</b> companies.
        </Typography>
      </Grid>
    </>
  );
}
