import Box from "@mui/material/Box";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Logo = () => {
  const numberOFTimes = 300;
  return (
    <Box>
      <Box className="image">
        <StaticImage src="../../images/itrans-images/iTrans.png" alt="iTrans" />
      </Box>
      <Box className="wrap" component="div">
        {
          <>
            {[...Array(numberOFTimes)].map((e, i) => (
              <div key={i} className="c"></div>
            ))}
          </>
        }
      </Box>
    </Box>
  );
};

export default Logo;
