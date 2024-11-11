import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountsPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        py: 10,
      }}
    >
     
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          sx={{
            color: "#FAFAFA",
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "35px", md: "45px" },
          }}
        >
          Welcome to Your Course Account
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            mt: 1,
            maxWidth: 1000,
            color: "#E50914",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Manage your account to access exclusive course content, track your
          progress, and stay connected with our learning community.
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid container spacing={3} sx={{ maxWidth: 1100, mx: "auto", mt: 4 }}>
        {/* Create Account Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: "#333",
              p: 4,
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: 3,
              height: { xs: "auto", md: 400 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#FFD700", mb: 2, fontWeight: "bold" }}
            >
              Create a New Account
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.6,
                mb: 3,
                color: "#FAFAFA",
                fontWeight: "bold",
              }}
            >
              Join a community of learners and unlock access to course content,
              trackable progress, personalized recommendations, and more:
            </Typography>
            <Box
              component="ul"
              sx={{
                textAlign: "left",
                mx: "auto",
                maxWidth: 300,
                mb: 3,
                color: "#FAFAFA",
              }}
            >
              <Typography component="li" sx={{ mb: 1 }}>
                Seamless tracking of course progress across devices
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Access to exclusive course content and resources
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Personalized learning recommendations
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Join study groups and connect with other learners
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => navigate("/register")}
              sx={{
                backgroundColor: "#1877F2",
                color: "#fff",
                fontSize: "16px",
                borderRadius: 2,
                py: 1,
                px: 3,
                "&:hover": {
                  backgroundColor: "#1877F2",
                },
              }}
            >
              Create Account
            </Button>
          </Paper>
        </Grid>

        {/* Sign In Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: "#333",
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              height: { xs: "auto", md: 400 },
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#FFD700", mb: 2, fontWeight: "bold" }}
            >
              Sign In to Your Account
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.6,
                mb: 3,
                color: "#FAFAFA",
                fontWeight: "bold",
              }}
            >
              Welcome back! Sign in to continue your learning experience and
              access:
            </Typography>
            <Box
              component="ul"
              sx={{
                textAlign: "left",
                mx: "auto",
                maxWidth: 300,
                mb: 3,
                color: "#FAFAFA",
              }}
            >
              <Typography component="li" sx={{ mb: 1 }}>
                Your saved courses and progress
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Access to all your purchased courses and materials
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Latest updates, tips, and exclusive offers
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Stay connected with your learning community
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={{
                marginTop: "50px",
                backgroundColor: "#1877F2",
                color: "#fff",
                fontSize: "16px",
                borderRadius: 2,
                py: 1,
                px: 3,
                "&:hover": {
                  backgroundColor: "#1877F2",
                },
              }}
            >
              Sign In
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountsPage;
