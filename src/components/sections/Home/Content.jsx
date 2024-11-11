import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

function Content() {
  const features = [
    "Thousands of creative classes. Beginner to pro.",
    "Taught by creative pros and industry icons.",
    "Learning Paths to help you achieve your goals.",
    "Certificates to celebrate your accomplishments.",
  ];

  const stats = [
    { value: "25K+", label: "CLASSES" },
    { value: "600K+", label: "MEMBERS" },
    { value: "8K+", label: "TEACHERS" },
    { value: "4.8 ★★★★★", label: "APP STORE RATING" },
  ];
  const userId = localStorage.getItem("userId");

  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "#FAFAFA",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Main Heading on the Left */}
          <Grid item xs={12} md={6}>
            <Box
              mt={{ xs: 10, md: 20 }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Typography variant="h4" fontWeight="bold" mb={2}>
                Creative Learning Made Easy
              </Typography>
            </Box>
          </Grid>

          {/* Feature List on the Right */}
          <Grid item xs={12} md={6}>
            <Box mt={{ xs: 5, md: 20 }}>
              {features.map((feature, index) => (
                <Box
                  display="flex"
                  alignItems="center"
                  mb={2}
                  key={index}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <CheckCircleIcon sx={{ color: "#E50914", mr: 1 }} />
                  <Typography variant="h6">{feature}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Stats Cards */}
        <Grid container spacing={2} mt={{ xs: 10, md: 15 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card
                sx={{
                  bgcolor: "#333",
                  color: "#FAFAFA",
                  textAlign: "center",
                  height: 105,
                  py: 2,
                  borderRadius: 3,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1.5rem",
                      color: "#E50914",
                      fontWeight: "bold",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2">{stat.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Image Section with Overlay */}
        <Box
          mt={{ xs: 10, md: 20 }}
          sx={{ position: "relative", textAlign: "center" }}
        >
          <Box
            component="img"
            src="/assets/images/content.webp"
            alt="The Art of Intelligence"
            sx={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "20px",
              mb: { xs: 2, sm: 0 },
            }}
          />
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: { xs: "70%", sm: "75%" },
              width: "84%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#FAFAFA",
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.6), transparent)",
              padding: { xs: 1, sm: 2 },
              zIndex: 1,
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Unlock Your Potential with Experts at Your Fingertips!
          </Typography>
        </Box>

        {/* "What You'll Get" Section */}
        <Box mt={8} textAlign="center">
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#91918e"
            sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
          >
            What You’ll Get
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={2}
            gap={1.5} // Adds spacing between lines
          >
            {[
              "Access our full library of 25K+ classes",
              "Watch on your computer, TV, phone, or tablet",
              "Learn on the go with audio-only lessons",
              "Download and watch offline (select plans)",
              "Unlock improved learning with class guides",
              "Share with family and friends who live with you",
            ].map((text, index) => (
              <Typography
                key={index}
                variant="h5"
                fontWeight="bolder"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.8rem" },
                  maxWidth: "700px", 
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
          {!userId && (
            <Box mt={5}>
              <Link to="/register">
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #e50914, #b00020)",
                    borderRadius: 2,
                    color: "#FAFAFA",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.3 },
                  }}
                >
                  Get Started
                </Button>
              </Link>
            </Box>
          )}
        </Box>

        {/* SkillForge for Teams Section */}
        <Box
          mt={{ xs: 10, md: 20 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",

            backgroundColor: "#121212",
            p: 3,
            borderRadius: 2,
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "50%" },
              mb: { xs: 3, sm: 0 },
              p: { xs: 2, sm: 3 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }}
            >
              SkillForge for Teams
            </Typography>
            <Typography
              variant="h5"
              mt={2}
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                textAlign: "justify",
              }}
            >
              Set your team up for success with reimagined learning to empower
              their personal and professional growth.
            </Typography>
            <Typography
              variant="h5"
              mt={2}
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                textAlign: "justify",
              }}
            >
              With inspiring classes on soft skills, business essentials,
              well-being, and more, your whole team will have deep knowledge and
              expertise at their fingertips.
            </Typography>
            <Box mt={2}>
              <Link to="/about">
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #0096c7, #005f73)",
                    borderRadius: 2,
                    color: "#fafafa",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Box>

          {/* Image Section */}
          <Box
            component="img"
            src="/assets/images/content2.webp"
            alt="SkillForge for Teams"
            sx={{
              width: { xs: "100%", sm: "45%" },
              borderRadius: 3,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Content;
