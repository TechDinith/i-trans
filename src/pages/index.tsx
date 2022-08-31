import * as React from "react";
import type { HeadFC } from "gatsby";
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import Logo from "../components/logo/logo";
import "../style/pages/index.scss";
import Grid from "@mui/material/Grid";
const IndexPage = () => {
  return (
    <CssVarsProvider>
      <Layout>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <Logo />
          </Grid>
        </Grid>
      </Layout>
    </CssVarsProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
