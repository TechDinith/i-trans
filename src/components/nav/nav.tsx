import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Nav() {
  return (
    <Box
      component="nav"
      sx={{
        flexGrow: 1,
      }}
    >
      <List role="menubar" row>
        <Grid container justifyContent="center">
          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton role="menuitem">
                <AnchorLink
                  to="/#work"
                  title="Work"
                  className="navAnchor"
                  stripHash
                />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton role="menuitem">
                <AnchorLink
                  to="/#tools"
                  title="Tools"
                  className="navAnchor"
                  stripHash
                />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={4}>
            <ListItem role="none" sx={{ justifyContent: "center", p: "0" }}>
              <ListItemButton
                role="menuitem"
                sx={{ width: { sm: "40%", xs: "90%" } }}
              >
                <AnchorLink to="/#top" className="navAnchor" stripHash>
                  <StaticImage
                    src="../../images/itrans-images/iTrans.png"
                    alt="iTrans"
                  />
                </AnchorLink>
              </ListItemButton>
            </ListItem>
          </Grid>

          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton role="menuitem">
                <AnchorLink
                  to="/#contact"
                  title="Contact"
                  className="navAnchor"
                  stripHash
                />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton role="menuitem">
                <AnchorLink
                  to="/#about"
                  title="About"
                  className="navAnchor"
                  stripHash
                />
              </ListItemButton>
            </ListItem>
          </Grid>
        </Grid>
      </List>
    </Box>
  );
}
