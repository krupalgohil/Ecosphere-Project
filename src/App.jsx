import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import UserFeed from "./components/UserFeed";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container>
        <FeaturedProducts />
        <UserFeed />
        <Dashboard />
      </Container>
      <Footer />
    </>
  );
};

export default App;