import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?plants')",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Welcome to Plantify
      </Typography>
      <Typography variant="h6">Join our community & shop for the best plants</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Explore Now
      </Button>
    </Box>
  );
};

export default HeroSection;