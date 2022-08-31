import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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
      <Nav />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
