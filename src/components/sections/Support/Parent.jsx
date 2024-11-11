import React from "react";
import { Box, Typography, Grid, Paper, Link } from "@mui/material";

const ParentGuardianSupport = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: { xs: 3, sm: 6, md: 10 }, // Responsive padding
        minHeight: "100vh",
        textAlign: "center",
        py: 10,
      }}
    >
      {/* Header Section */}
      <Box sx={{ marginBottom: 5 }}>
        <Typography
          variant="h3"
          sx={{
            color: "#FAFAFA",
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "45px" }, // Responsive font size
          }}
        >
          Parent/Guardian Support
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            marginTop: 1,
            maxWidth: 700,
            color: "#E50914",
            mx: "auto",
          }}
        >
          Your guide to supporting your child’s learning journey in our online
          courses.
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid container spacing={3} sx={{ maxWidth: 1100, mx: "auto" }}>
        {[
          {
            title: "Encouraging Consistent Learning Habits",
            content:
              "Help your child stay motivated and on track with their studies. Our platform offers tools to support regular learning and track progress.",
            items: [
              "Set a regular study schedule",
              "Monitor course progress and completion rates",
              "Encourage time for reflection and review",
            ],
          },
          {
            title: "Ensuring a Safe Learning Environment",
            content:
              "We prioritize safety and privacy. Learn about our measures to protect your child’s personal data and online interactions.",
            items: [
              "Protect your child’s personal information",
              "Understand our privacy and data policies",
              "Report any suspicious activity or concerns",
            ],
          },
          {
            title: "Supporting Engagement and Interaction",
            content:
              "Engagement is key to learning. Discover ways to encourage your child to actively participate in discussions and activities.",
            items: [
              "Encourage participation in forums and Q&A",
              "Help your child set achievable goals",
              "Foster a positive attitude towards learning",
            ],
          },
          {
            title: "Resources for Parents",
            content:
              "Explore additional resources that can help you support your child’s learning, including articles and guidelines for effective online study habits.",
            items: [
              <Link href="#" color="#4fc3f7">
                Parent’s Guide to Online Learning
              </Link>,
              <Link href="#" color="#4fc3f7">
                Tips for Creating a Study-Friendly Environment
              </Link>,
              <Link href="#" color="#4fc3f7">
                Balancing Screen Time and Study Time
              </Link>,
            ],
          },
        ].map((section, index) => (
          <Grid item xs={12} sm={6} md={12} key={index}>
            <Paper
              sx={{
                backgroundColor: "#333",
                padding: 3,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderLeft: "5px solid #E50914",
                borderRadius: 2,
                marginBottom: 2,
                mx: "auto",
                maxWidth: 900,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#FFD700",
                  fontSize: "1.5rem",
                  marginBottom: 1,
                  fontWeight: "bold",
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  textAlign: "left",
                  color: "#FAFAFA",
                }}
              >
                {section.content}
              </Typography>
              <Box component="ul" sx={{ paddingLeft: 3, marginTop: 2 }}>
                {section.items.map((item, itemIndex) => (
                  <Typography
                    component="li"
                    key={itemIndex}
                    sx={{
                      fontSize: "1.1rem",
                      marginY: 1,
                      textAlign: "left",
                      color: "#FAFAFA",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Footer Section */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: 5,
          padding: 2,
          backgroundColor: "#333",
          borderRadius: 2,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          fontSize: "1rem",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Typography>
          Need more help?{" "}
          <Link
            href="/support"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Contact our Support Team
          </Link>{" "}
          for personalized assistance.
        </Typography>
      </Box>
    </Box>
  );
};

export default ParentGuardianSupport;
