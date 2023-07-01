import React from "react";
import { Box, Typography } from "@mui/material";

import backgroundImage from "../../assets/logIn.png";

function LogIn() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "30%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Typography
        sx={{ paddingTop: "5%", fontWeight: "bold", fontSize: "24px" }}
      >
        WELCOME!
      </Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
        YOU ARE NOW LOGGED IN
      </Typography>
    </Box>
  );
}

export default LogIn;
