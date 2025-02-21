import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2E7D32", color: "white", textAlign: "center", padding: 2, marginTop: 3 }}>
      <Typography variant="body2">&copy; 2025 Plantify. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;