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
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

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
          <Grid
            item
            xs={11}
            mb={{ xs: 10, sm: 30 }}
            id="top"
            display={{ xs: "block", md: "flex", sm: "flex" }}
            height="15%"
          >
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
          </Grid>

          <Grid item xs={11} component={Paper} elevation={1} pb={2} id="work">
            <Typography variant="h2">
              <b>Work</b> <ReceiptLongIcon />
            </Typography>
            <Typography variant="h5" component="p" ml={2}>
              We develop simple but modern full-Stack web applications,
              front-end web designs, and back-end integrations for already
              designed front-ends.., especially for <b>minor</b> and{" "}
              <b>start-up</b> companies.
            </Typography>
            <Typography variant="h5" component="p" ml={2} mt={2}>
              With us, the cost is not an obstacle, and it's flexible more than
              you can imagine.
            </Typography>
            <Typography variant="h5" component="p" ml={2} mt={2} mb={4}>
              Well, if you have a project that cost is bothering you, just
              contact us via the contact section.
            </Typography>
            <Divider variant="middle">
              <Typography variant="h5">
                <b>Previous works</b>
              </Typography>
            </Divider>
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
