import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { iLayout } from "./layout.interface";
import Nav from "../nav/nav";
import { useColorScheme } from "@mui/joy/styles";
import Box from "@mui/material/Box";

const Layout = ({ children }: iLayout) => {
  useColorScheme();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box>
      <div className="animation-wrapper">
        <Nav />
        <main>{children}</main>
        {/* particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
    </Box>
  );
};

export default Layout;
