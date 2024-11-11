import React from "react";
import { Box, Typography, Link, Grid, Divider } from "@mui/material";
import {
  Instagram,
  LinkedIn,
  YouTube,
  Pinterest,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fafafa",
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <img src="assets/images/logo2.png" alt="SkillForge Logo" width="120" />
      </Box>

      <Grid
        container
        spacing={4}
        maxWidth="1000px"
        mx="auto"
        textAlign="left"
        justifyContent="space-between"
        sx={{ flexDirection: { xs: "column", sm: "row" }, mb: 5 }}
      >
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            fontWeight="bold"
            pb={2}
            sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem" } }}
          >
            Company
          </Typography>
          {[
            "About",
            "Careers",
            "Press",
            "Blog",
            "Affiliate Program",
            "Partnerships",
          ].map((text, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                display: "block",
                mb: 1,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": { color: "#32CD32", textDecoration: "underline" },
              }}
            >
              {text}
            </Link>
          ))}
        </Grid>

        {/* Community Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            fontWeight="bold"
            pb={2}
            sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem" } }}
          >
            Community
          </Typography>
          {["Team Plans", "Gift Cards", "Corporate Gifts", "Scholarships"].map(
            (text, index) => (
              <Link
                key={index}
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "&:hover": { color: "#32CD32", textDecoration: "underline" },
                }}
              >
                {text}
              </Link>
            )
          )}
        </Grid>

        {/* Teaching Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            fontWeight="bold"
            pb={2}
            sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem" } }}
          >
            Teaching
          </Typography>
          {["Become a Teacher", "Teacher Help Center", "Teacher Rules"].map(
            (text, index) => (
              <Link
                key={index}
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "&:hover": { color: "#32CD32", textDecoration: "underline" },
                }}
              >
                {text}
              </Link>
            )
          )}
        </Grid>

        {/* Mobile Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            fontWeight="bold"
            pb={2}
            sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem" } }}
          >
            Mobile
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: 2,
              mt: 1,
            }}
          >
            <img src="assets/images/apple.webp" alt="App Store" width="120" />
            <img src="assets/images/google.png" alt="Google Play" width="120" />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, borderColor: "#32CD32", opacity: 0.3 }} />

      {/* Bottom Section */}
      <Grid
        container
        spacing={2}
        maxWidth="1000px"
        mx="auto"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
      >
        {/* Legal Links */}
        <Grid item xs={12} md={6} textAlign="left">
          <Typography
            variant="body2"
            color="inherit"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            © SkillForge, 2024 •
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "#32CD32" } }}
            >
              Help
            </Link>{" "}
            •
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "#32CD32" } }}
            >
              Privacy
            </Link>{" "}
            •
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "#32CD32" } }}
            >
              Terms
            </Link>
          </Typography>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} md={6} textAlign="left" mt={{ xs: 3, md: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 3,
            }}
          >
            <Instagram
              sx={{
                color: "#fff",
                cursor: "pointer",
                "&:hover": { color: "#32CD32" },
              }}
            />
            <LinkedIn
              sx={{
                color: "#fff",
                cursor: "pointer",
                "&:hover": { color: "#32CD32" },
              }}
            />
            <YouTube
              sx={{
                color: "#fff",
                cursor: "pointer",
                "&:hover": { color: "#32CD32" },
              }}
            />
            <Pinterest
              sx={{
                color: "#fff",
                cursor: "pointer",
                "&:hover": { color: "#32CD32" },
              }}
            />
            <Twitter
              sx={{
                color: "#fff",
                cursor: "pointer",
                "&:hover": { color: "#32CD32" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
