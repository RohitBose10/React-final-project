import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Google, Facebook, Apple } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Banner = () => {
  const userId = localStorage.getItem("userId");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        p: { xs: 3, md: 5 },
        mx: "auto",

        bgcolor: "#0f0f0f",
        color: "#FAFAFA",
        backgroundImage:
          "radial-gradient(circle, rgba(255, 0, 0, 0.3) 0%, rgba(15, 15, 15, 1) 50%, #0f0f0f 100%)",
        backgroundSize: "cover",

        color: "#FAFAFA",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
        gap: 2,
      }}
    >
      {/* Left Side: Title and Sign Up Options */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          pl: { xs: 2, md: 15 },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            fontFamily: "sans-serif",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.2rem" }, // Increase font size
            color: "#FAFAFA",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          "Become a pro <br /> with thousands of <br /> creative classes."
        </Typography>

        {!userId && (
          <Box
            sx={{
              maxWidth: 300,
              p: 2.5,
              bgcolor: "#292929",
              borderRadius: 2,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              mb={2}
              sx={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "#B3B3B3",
              }}
            >
              Get{" "}
              <span style={{ textDecoration: "underline" }}>7 free days</span>{" "}
              of SkillForge
            </Typography>
            <Stack spacing={1.5}>
              <Link to="https://www.google.com/">
                <Button
                  variant="contained"
                  startIcon={<Google />}
                  fullWidth
                  sx={{
                    backgroundColor: "#DB4437",
                    color: "#FFFFFF",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#C23321" },
                    boxShadow: "0 4px 10px rgba(76, 175, 80, 0.4)",
                  }}
                >
                  Continue with Google
                </Button>
              </Link>
              <Link to="https://www.facebook.com/">
                <Button
                  variant="contained"
                  startIcon={<Facebook />}
                  fullWidth
                  sx={{
                    backgroundColor: "#1877F2",
                    color: "#FFFFFF",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#155BB5" },
                    boxShadow: "0 4px 10px rgba(59, 89, 152, 0.4)",
                  }}
                >
                  Continue with Facebook
                </Button>
              </Link>
              <Link to="https://www.apple.com/">
                <Button
                  variant="contained"
                  startIcon={<Apple />}
                  fullWidth
                  sx={{
                    backgroundColor: "#333333",
                    color: "#FFFFFF",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: " #1F1F1F" },
                    boxShadow: "0 4px 10px rgba(51, 51, 51, 0.4)",
                  }}
                >
                  Continue with Apple
                </Button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography
                  align="center"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "#ffffff",
                    mt: 1,
                    cursor: "pointer",
                  }}
                >
                  Continue with SkillForge
                </Typography>
              </Link>
            </Stack>
            <Typography
              variant="body2"
              align="center"
              mt={2}
              sx={{
                fontFamily: "sans-serif",
                fontSize: "0.8rem",
              }}
            >
              By signing up you agree to SkillForge’s{" "}
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Terms of Service
              </span>{" "}
              and{" "}
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Privacy Policy
              </span>
              .
            </Typography>
          </Box>
        )}
      </Box>

      {/* Right Side: Scrolling Images with Seamless Animation */}
      <Box
        sx={{
          flex: 1,
          maxHeight: 500,

          overflow: "hidden",
          borderRadius: 3,
          position: "relative",
          pr: { xs: 2, md: 15 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            animation: "scrolling 20s linear infinite",
            "@keyframes scrolling": {
              "0%": { transform: "translateY(0)" },
              "100%": { transform: "translateY(-50%)" },
            },
          }}
        >
          {/* Duplicate the images to create a seamless loop */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src="/assets/images/content5.webp"
                alt="Image 1"
                style={{ borderRadius: "8px", width: "50%" }}
              />
              <img
                src="/assets/images/content3.webp"
                alt="Image 2"
                style={{ borderRadius: "8px", width: "50%" }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src="/assets/images/content6.webp"
                alt="Image 3"
                style={{ borderRadius: "8px", width: "50%" }}
              />
              <img
                src="/assets/images/content4.webp"
                alt="Image 4"
                style={{ borderRadius: "8px", width: "50%" }}
              />
            </Box>

            {/* Duplicate rows for a seamless loop */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src="/assets/images/content7.webp"
                alt="Image 5"
                style={{ borderRadius: "8px", width: "50%" }}
              />
              <img
                src="/assets/images/content8.webp"
                alt="Image 6"
                style={{ borderRadius: "8px", width: "50%" }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src="/assets/images/content9.webp"
                alt="Image 7"
                style={{ borderRadius: "8px", width: "50%" }}
              />
              <img
                src="/assets/images/content10.webp"
                alt="Image 8"
                style={{ borderRadius: "8px", width: "50%" }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src="/assets/images/content11.webp"
                alt="Image 9"
                style={{ borderRadius: "8px", width: "50%" }}
              />
              <img
                src="/assets/images/content12.webp"
                alt="Image 10"
                style={{ borderRadius: "8px", width: "50%" }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src="/assets/images/content13.webp"
                alt="Image 11"
                style={{ borderRadius: "8px", width: "50%" }}
              />
              <img
                src="/assets/images/content14.webp"
                alt="Image 12"
                style={{ borderRadius: "8px", width: "50%" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
