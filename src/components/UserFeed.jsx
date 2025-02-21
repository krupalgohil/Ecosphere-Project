import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const posts = [
  { id: 1, user: "Alice", text: "Look at my new Monstera!", img: "https://source.unsplash.com/400x250/?houseplants" },
  { id: 2, user: "Bob", text: "My balcony garden is thriving!", img: "https://source.unsplash.com/400x250/?balcony-garden" },
];

const UserFeed = () => {
  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: 2 }}>
          <CardMedia component="img" height="250" image={post.img} alt={post.user} />
          <CardContent>
            <Typography variant="h6">{post.user}</Typography>
            <Typography variant="body2">{post.text}</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
              Like
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default UserFeed;