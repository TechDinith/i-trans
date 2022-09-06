import Typography from "@mui/material/Typography";
import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Work() {
  return (
    <>
      <Typography variant="h2">
        <b>Work</b> <ReceiptLongIcon />
      </Typography>
      <Typography variant="h5" component="p" ml={2}>
        We develop simple but modern, <br />
        <br />
        <b> #full-Stack web applications</b>,
        <br />
        <b> #front-end web designs</b>, and <br />{" "}
        <b>#back-end integrations for already designed front-ends</b>.., <br />
        <br /> especially for <b>minor</b> and <b>start-up</b> companies.
      </Typography>
      <Typography variant="h5" component="p" ml={2} mt={2}>
        With us, the <b>cost</b> is <b>not</b> an <b>obstacle</b>, and it's{" "}
        <b>flexible</b> more than you can <b>imagine</b>.
      </Typography>
      <Typography variant="h5" component="p" ml={2} mt={2} mb={4}>
        Well, if you have a <b>project</b> that cost is bothering you, just
        contact us via the{" "}
        <b>
          <AnchorLink
            to="/#contact"
            title="contact section"
            className="navAnchor "
            stripHash
          />
        </b>
        .
      </Typography>
    </>
  );
}
