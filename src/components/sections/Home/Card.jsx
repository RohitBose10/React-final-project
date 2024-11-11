import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "YouTube Success: Script, Shoot & Edit with MKBHD",
    author: "Marques Brownlee",
    students: "88,350 students",
    duration: "1h 13m",
    image: "assets/images/card1.webp",
    tag: "Original",
  },
  {
    title: "Music Fundamentals: Explore & Create Your Unique Sound",
    author: "Jacob Collier",
    students: "9,687 students",
    duration: "1h 16m",
    image: "assets/images/card2.webp",
    tag: "Original",
  },
  {
    title: "Find Your Style: Five Exercises to Unlock Your Creative Identity",
    author: "Andy J. Pizza",
    students: "72,948 students",
    duration: "1h 12m",
    image: "assets/images/card3.avif",
    tag: "Original",
  },
  {
    title: "Video for Instagram: Tell an Engaging Story in very short time",
    author: "Hallease",
    students: "11,148 students",
    duration: "27m",
    image: "assets/images/card4.avif",
    tag: "Staff Pick",
  },
  {
    title: "Organic Expressive Florals With Watercolor and Ink",
    author: "Ohn Mar Win",
    students: "11,710 students",
    duration: "3h 29m",
    image: "assets/images/card5.jpg",
    tag: "Staff Pick",
  },
  {
    title: "Productivity for Creators: Systems & Workflow",
    author: "Ali Abdaal",
    students: "35,261 students",
    duration: "1h 33m",
    image: "assets/images/card6.webp",
    tag: "Staff Pick",
  },
  {
    title: "Procreate for Beginners: Learn the Basics & Sell Your Artwork",
    author: "Cat Coquillette",
    students: "63,240 students",
    duration: "1h 50m",
    image: "assets/images/card7.avif",
    tag: "Original",
  },
  {
    title: "Painting with Thread: Modern Embroidery for Beginners",
    author: "Danielle Clough",
    students: "15,480 students",
    duration: "1h 29m",
    image: "assets/images/card8.webp",
    tag: "Original",
  },
];

const MediaCard = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "#FAFAFA",
        minHeight: "100vh",
        p: 2,
        px: isSmallScreen ? 2 : isTablet ? 4 : 8,
      }}
    >
      <Box
        sx={{
          bgcolor: "#121212",
          color: "#FAFAFA",
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography variant={isSmallScreen ? "h4" : "h3"} fontWeight="bold">
          Explore Inspiring Online Courses
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        px={isTablet ? 4 : "80px"}
      >
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                height: "320px",
                mx: "auto",
                position: "relative",
                borderRadius: 3,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Link
                to="categories"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#FAFAFA",
                    padding: "2px 8px",
                    borderRadius: 3,
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  {course.tag}
                </Box>
                <CardMedia
                  sx={{ height: 180 }}
                  image={course.image}
                  title={course.title}
                />
                <CardContent
                  sx={{ backgroundColor: "#fafafa", paddingBottom: 0 }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontSize="1rem"
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {course.author}
                  </Typography>
                  <Typography variant="caption" color="text.primary">
                    {course.students} • {course.duration}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MediaCard;
