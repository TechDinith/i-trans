import * as React from "react";
import type { HeadFC } from "gatsby";
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
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
import Work from "../components/work/work";
import Sound from "react-sound";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import discovery from "../sounds/Discovery_EP_AK_Aljosha_Konstanty.mp3";
import Fab from "@mui/material/Fab";
import PreWorks from "../components/pre-works/pre.works";
import Tools from "../components/tools/tools";
import Contact from "../components/contact/contact";
import About from "../components/about/about";
import Button from "@mui/material/Button";
import Home from "../components/home/home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const theme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

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
      <div id="topup">
        <Sound
          url={discovery}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          loop={true}
          autoLoad
          onError={(err: any) => console.log(err)}
        />
      </div>

      {!isPlaying ? (
        <div className="music-btn">
          <Fab
            size="small"
            color="info"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <MusicNoteIcon fontSize="small" color="inherit" />
          </Fab>
        </div>
      ) : (
        <div className="music-btn">
          <Fab
            color="error"
            size="small"
            onClick={() => setIsPlaying(!isPlaying)}
            className="music-btn"
          >
            <MusicOffIcon fontSize="small" color="inherit" />
          </Fab>
        </div>
      )}

      {navbar && (
        <>
          <AnchorLink to="/#topup" className="top-btn" stripHash>
            <Fab color="info" size="small">
              <ArrowUpwardIcon color="inherit" fontSize="small" />
            </Fab>
          </AnchorLink>
        </>
      )}

      <Layout>
        <Grid container mt={4} justifyContent="center">
          <Grid
            item
            xs={11}
            mb={{ xs: 6, sm: 10 }}
            display={{ xs: "block", md: "flex", sm: "flex" }}
            height="15%"
          >
            <Home />
          </Grid>
          <Grid item xs={6} sm={4} md={2} mb={{ xs: 6, sm: 10 }}>
            <Button variant="outlined" size="large" fullWidth color="secondary">
              <AnchorLink
                to="/#contact"
                title="Get Started!"
                className="about-anchor "
                stripHash
              />
            </Button>
          </Grid>
          <Grid item xs={11} component={Paper} elevation={1} p={2} id="work">
            <Work />
            <PreWorks />
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            elevation={5}
            mt={5}
            p={2}
            id="tools"
          >
            <Tools />
          </Grid>

          <Grid
            item
            xs={11}
            component={Paper}
            elevation={10}
            mt={5}
            p={2}
            id="contact"
          >
            <Contact />
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            elevation={15}
            mt={5}
            p={2}
            id="about"
          >
            <About />
          </Grid>
        </Grid>
      </Layout>
      <Grid
        item
        xs={12}
        component={Paper}
        elevation={15}
        mt={5}
        p={2}
        display="flex"
        justifyContent="center"
      >
        <Typography variant="caption">
          Copyright ©{" "}
          <AnchorLink
            to="/#topup"
            title="iTrans"
            className="navAnchor "
            stripHash
          />{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Grid>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
