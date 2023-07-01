import React from "react";
import { Box, Typography } from "@mui/material";

import backgroundImage from "../../assets/logOut.png";

function LoggedOut() {
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
        sx={{ paddingTop: "5%", fontWeight: "bold", fontSize: "26px" }}
      >
        YOU ARE NOW LOGGED OUT
      </Typography>
    </Box>
  );
}

export default LoggedOut;
