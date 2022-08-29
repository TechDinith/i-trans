import * as React from "react";
import type { HeadFC } from "gatsby";
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import "../style/index.scss";

const IndexPage = () => {
  return <Layout>{/* <h1>Home</h1> */}</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
