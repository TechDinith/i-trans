import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { iLayout } from "./layout.interface";
import Nav from "../nav/nav";
import Box from "@mui/material/Box";

const Layout = ({ children }: iLayout) => {
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
    <Box sx={{ justifyContent: "center" }}>
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
