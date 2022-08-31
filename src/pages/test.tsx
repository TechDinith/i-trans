import * as React from "react";
import type { HeadFC } from "gatsby";
import Seo from "../components/seo/seo";

import "../style/pages/index.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Grid, Typography } from "@mui/material";

const Test = () => {
  return (
    <div>
      <AnchorLink
        to="/test#targ1"
        title="Check out our team!"
        className="stripped"
        stripHash
      />

      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>

      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>

      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>

      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <h1 color="white">You scrolled to me</h1>
      <Grid id="targ1">
        <Typography color="white">You scrolled to me</Typography>
      </Grid>
    </div>
  );
};

export default Test;

export const Head: HeadFC = () => <Seo title="Test" />;
