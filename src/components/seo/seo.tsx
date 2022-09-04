import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { iSeo } from "./seo.interface";

const Seo = ({ title }: iSeo) => {
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
    <title>
      {title
        ? `${title} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
