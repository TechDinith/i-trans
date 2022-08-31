import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";

export default function Nav() {
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" row>
        <Grid container justifyContent="center">
          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                Work
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                Tools
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={4}>
            <ListItem role="none" sx={{ justifyContent: "center", p: "0" }}>
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                sx={{ width: { sm: "40%", xs: "90%" } }}
              >
                <StaticImage
                  src="../../images/itrans-images/iTrans.png"
                  alt="iTrans"
                />
              </ListItemButton>
            </ListItem>
          </Grid>

          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                Contact
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={2} justifyContent="center" display="flex">
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                About
              </ListItemButton>
            </ListItem>
          </Grid>
        </Grid>
      </List>
    </Box>
  );
}
