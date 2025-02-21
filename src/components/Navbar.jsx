import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Logo from "./logo/ecoSphere.png"; // Relative path to the logo


const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2E7D32" }}>
      <Toolbar>
        {/* Logo Section */}
        <img src={Logo} alt="Plantify Logo" style={{ height: 40, marginRight: 16 }} />

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EcoSphere - Social & Shop
        </Typography>

        {/* Navbar Buttons */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">Shop</Button>
        <Button color="inherit">Community</Button>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
