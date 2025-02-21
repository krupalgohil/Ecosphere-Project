import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const products = [
  { id: 1, name: "Monstera Deliciosa", price: "$25", img: "https://source.unsplash.com/300x200/?monstera" },
  { id: 2, name: "Fiddle Leaf Fig", price: "$30", img: "https://source.unsplash.com/300x200/?fiddle-leaf-fig" },
  { id: 3, name: "Snake Plant", price: "$20", img: "https://source.unsplash.com/300x200/?snake-plant" },
];

const FeaturedProducts = () => {
  return (
    <Grid container spacing={3} padding={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="200" image={product.img} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.price}</Typography>
              <Button variant="contained" color="success" sx={{ mt: 1 }}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedProducts;