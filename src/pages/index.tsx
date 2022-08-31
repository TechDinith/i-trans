import * as React from "react";
import type { HeadFC } from "gatsby";
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import "../style/index.scss";
import Typography from "@mui/material/Typography";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";

const IndexPage = () => {
  return (
    <CssVarsProvider>
      <div className="animation-wrapper">
        <Layout>
          <Typography variant="h1">Home</Typography>
        </Layout>
        {/* particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
    </CssVarsProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
