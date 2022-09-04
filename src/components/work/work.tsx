import Typography from "@mui/material/Typography";
import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export default function Work() {
  return (
    <>
      <Typography variant="h2">
        <b>Work</b> <ReceiptLongIcon />
      </Typography>
      <Typography variant="h5" component="p" ml={2}>
        We develop simple but modern full-Stack web applications, front-end web
        designs, and back-end integrations for already designed front-ends..,
        especially for <b>minor</b> and <b>start-up</b> companies.
      </Typography>
      <Typography variant="h5" component="p" ml={2} mt={2}>
        With us, the cost is not an obstacle, and it's flexible more than you
        can imagine.
      </Typography>
      <Typography variant="h5" component="p" ml={2} mt={2} mb={4}>
        Well, if you have a project that cost is bothering you, just contact us
        via the contact section.
      </Typography>
    </>
  );
}
