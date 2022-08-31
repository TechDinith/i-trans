import * as React from "react";
import type { HeadFC } from "gatsby";
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Logo from "../components/logo/logo";
import "../style/pages/index.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const theme = responsiveFontSizes(darkTheme);
const IndexPage = () => {
  const [navbar, setNavbar] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <p id="topup"></p>
      {navbar && (
        <>
          <AnchorLink to="/#topup" className="top-btn" stripHash>
            <ArrowUpwardIcon color="primary" sx={{ fontSize: "30px" }} />
          </AnchorLink>
        </>
      )}
      <Layout>
        <Grid container mt={4} justifyContent="center" spacing={4}>
          <Grid item xs={8} mb={{ xs: 10, sm: 55 }} id="top">
            <Logo />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h1" id="work">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              iusto assumenda quod consectetur facere impedit fugit hic eaque,
              mollitia explicabo quae. Exercitationem fugit voluptates, atque
              itaque incidunt alias. Ducimus, perferendis.
            </Typography>
          </Grid>
          {/*
          <Grid item xs={8}>
            <Typography variant="h1" id="tools">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              iusto assumenda quod consectetur facere impedit fugit hic eaque,
              mollitia explicabo quae. Exercitationem fugit voluptates, atque
              itaque incidunt alias. Ducimus, perferendis.
            </Typography>
          </Grid>
          <br />
          <Grid item xs={8} id="contact">
            <Typography variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              iusto assumenda quod consectetur facere impedit fugit hic eaque,
              mollitia explicabo quae. Exercitationem fugit voluptates, atque
              itaque incidunt alias. Ducimus, perferendis.
            </Typography>
          </Grid>
          <br />
          <Grid item xs={8}>
            <Typography variant="h1" id="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              iusto assumenda quod consectetur facere impedit fugit hic eaque,
              mollitia explicabo quae. Exercitationem fugit voluptates, atque
              itaque incidunt alias. Ducimus, perferendis.
            </Typography>
          </Grid> */}
        </Grid>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
