import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { iSeo } from "../../interfaces/components/seo.interface";

export default function Seo({ title }: iSeo) {
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
}
