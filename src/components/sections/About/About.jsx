import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
        pb: 5,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#121212",
          p: isSmallScreen ? 4 : "80px 20px",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            sx={{ color: "#FAFAFA", fontWeight: "bold" }}
          >
            Let the world's best bring out your people's best.
          </Typography>
          <Typography variant="h6" sx={{ color: "#E50914", mt: 2, mb: 3 }}>
            At SkillForge, we empower you to gain skills that make a difference.
          </Typography>

          {/* Video Section */}
          <Box
            component="video"
            src="assets/videos/about.mp4"
            autoPlay
            muted
            loop
            sx={{
              width: "100%",
              maxWidth: "888px",
              height: isSmallScreen ? "300px" : "500px",
              borderRadius: 3,
              mt: 2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
            controls={false} 
          />
        </Container>
      </Box>

      {/* Core Feature Boxes Section */}
      <Container sx={{ py: 5 }}>
        <Typography
          variant={isSmallScreen ? "h5" : "h3"}
          sx={{ color: "#FAFAFA", fontWeight: "bold", textAlign: "center" }}
        >
          Learning that transforms business. And lives.
        </Typography>
        <Grid mt={5} container spacing={4} justifyContent="center">
          {[
            {
              title: "Drive business success.",
              description:
                "Boost impact and ROI with tried-and-tested learning.",
              imageUrl: "assets/images/about1.webp",
            },
            {
              title: "Inspire lifelong skills.",
              description:
                "Our instructors teach core skills that excel at work.",
              imageUrl: "assets/images/about2.jpg",
            },
            {
              title: "Learn from top minds.",
              description: "Courses taught by industry-leading professionals.",
              imageUrl: "assets/images/about4.webp",
            },
            {
              title: "Flexible learning paths.",
              description: "Study anytime, anywhere, on any device.",
              imageUrl: "assets/images/about3.webp",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Paper
                sx={{
                  backgroundColor: "#2c2c2c",
                  borderRadius: 2,
                  overflow: "hidden",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src={item.imageUrl}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    height: isSmallScreen ? "200px" : "300px",
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#E50914", fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#FAFAFA", mt: 1 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Small Team Section */}
      <Box sx={{ backgroundColor: "#121212", py: 10, textAlign: "center" }}>
        <Container>
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
            sx={{ fontWeight: "bold", color: "#FAFAFA" }}
          >
            Buying for a small team?
          </Typography>
          <Typography variant="body1" sx={{ color: "#E50914", mt: 2, mb: 4 }}>
            Our self-service option lets you activate our Collective solution in
            minutes.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {[
              {
                text: "Flexible Membership Options",
                subtext:
                  "- Purchase 5-50 licenses; contact sales for larger teams.",
              },
              {
                text: "Focused SkillForge Content Access",
                subtext:
                  "- Access curated courses in topics like Web Development, Data Science, and more.",
              },
              {
                text: "Powerful Analytics and Admin Tools",
                subtext:
                  "- Track progress, generate reports, and manage team learning seamlessly.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    backgroundColor: "#333",
                    height: 150,
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFD700", fontWeight: "bold" }}
                  >
                    ✓ {item.text}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#FAFAFA", mt: 1 }}>
                    {item.subtext}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Link to="/categories">
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #e50914, #b00020)",
                color: "#FAFAFA",
                fontWeight: "bold",
                px: 3,
                py: 1.3,
                borderRadius: 2,
                fontSize: "1rem",
                mt: 4,
                "&:hover": {
                  backgroundColor: "#E50914",
                },
              }}
            >
              Explore Courses
            </Button>
          </Link>
        </Container>
      </Box>

      {/* Final Call-to-Action with Image */}
      <Box sx={{ backgroundColor: "#121212", py: 10 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{ color: "#E50914", fontWeight: "bold", mb: 3 }}
              >
                Ready to Transform Your Future with SkillForge?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#FAFAFA", mb: 3, textAlign: "justify" }}
              >
                SkillForge was founded with a mission to empower individuals
                worldwide through skill-based learning that drives real,
                transformative change. Since its inception, SkillForge has
                strived to create a learning platform where anyone, from any
                background, can gain the skills and knowledge necessary to
                succeed in today's dynamic world. SkillForge believes that
                access to high-quality education should be universal, bridging
                the gap between aspiration and achievement. Today, SkillForge
                stands as a trusted global resource for online skill
                development, offering a wide range of courses created by
                industry experts and leaders. With over a million learners and
                hundreds of organizations choosing SkillForge as their partner
                in growth, we’re dedicated to delivering transformative
                educational experiences—anytime, anywhere. Join us at SkillForge
                and take the next step towards mastering the skills that matter.
              </Typography>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="assets/images/about5.jpg" // Replace with your image path
                alt="Transform Your Future"
                sx={{
                  width: "100%",
                  maxWidth: "550px",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
