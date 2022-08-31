import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

export default function Nav() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid item xs={2}>
            <AnchorLink
              to="/#work"
              title="Work"
              className="navAnchor"
              stripHash
            />
          </Grid>
          <Grid item xs={2}>
            <AnchorLink
              to="/#tools"
              title="Tools"
              className="navAnchor"
              stripHash
            />
          </Grid>
          <Grid item xs={4} justifyContent="center" display="flex">
            <Grid item xs={6} sm={4} md={4}>
              <AnchorLink to="/#top" className="navAnchor" stripHash>
                <StaticImage
                  src="../../images/itrans-images/iTrans.png"
                  alt="iTrans"
                />
              </AnchorLink>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <AnchorLink
              to="/#contact"
              title="Contact"
              className="navAnchor"
              stripHash
            />
          </Grid>
          <Grid item xs={2}>
            <AnchorLink
              to="/#about"
              title="About"
              className="navAnchor"
              stripHash
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
