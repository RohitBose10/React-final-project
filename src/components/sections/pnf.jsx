import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#121212",
        color: "#FFFFFF",
        padding: 3,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for does not exist. It might have been moved or
        removed.
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => navigate("/")}
        sx={{
          background: "linear-gradient(135deg, #e50914, #b00020)",
          textTransform: "uppercase",
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
