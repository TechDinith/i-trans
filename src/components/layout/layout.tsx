import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { iLayout } from "./layout.interface";

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
    <div>
      {/* header */}
      {/* nav */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
