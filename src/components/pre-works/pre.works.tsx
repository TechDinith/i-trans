import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import ImageSlider from "./imageslider";

export default function PreWorks() {
  const query = graphql`
    query ($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          image1 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image1_alt
          image2 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image2_alt
          image3 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image3_alt
          image4 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image4_alt
          image5 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image5_alt
          image6 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image6_alt
          image7 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image7_alt
          image8 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image8_alt
          image9 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image9_alt
          image10 {
            childImageSharp {
              gatsbyImageData
            }
          }
          image10_alt
        }
      }
    }
  `;
  const data = useStaticQuery(query);

  const image1 = getImage(data.mdx.frontmatter.image1);

  const image2 = getImage(data.mdx.frontmatter.image2);
  const image3 = getImage(data.mdx.frontmatter.image3);
  const image4 = getImage(data.mdx.frontmatter.image4);
  const image5 = getImage(data.mdx.frontmatter.image5);
  const image6 = getImage(data.mdx.frontmatter.image6);
  const image7 = getImage(data.mdx.frontmatter.image7);
  const image8 = getImage(data.mdx.frontmatter.image8);
  const image9 = getImage(data.mdx.frontmatter.image9);
  const image10 = getImage(data.mdx.frontmatter.image10);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <Grid container>
      <Grid item xs={12} component={Paper} elevation={6} p="1%">
        <Divider variant="middle">
          <Typography variant="h5">
            <b>Pre - Works</b>
          </Typography>
        </Divider>
        <Grid item xs={12} mt="1%" display="flex" justifyContent="center">
          <Grid item xs={11} component={Paper} elevation={20} p="1%">
            <Typography variant="h6">E-Commerce Web-App</Typography>
            <ImageSlider images={images} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
