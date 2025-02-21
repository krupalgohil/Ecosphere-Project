import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Paper sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5">Admin Dashboard</Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>Total Users: 500</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>Total Orders: 120</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>Total Products: 30</Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;