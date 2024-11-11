import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Card,
  CardContent,
  Grid,
  Container,
  Divider,
  Rating,
} from "@mui/material";
import Swal from "sweetalert2";
import Carousel from "react-material-ui-carousel";
import { fetchReviews, postReview } from "../../redux/slice/reviewslice";

const ReviewComponent = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.rev);
  const [newReview, setNewReview] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [rating, setRating] = useState(0);
  const userId = localStorage.getItem("userId");

 
  const slides = [
    {
      text: "Experience the Joy of Learning.",
      image: "assets/images/review2.webp",
    },
    {
      text: "Share Your Thoughts with Us!",
      image: "assets/images/review1.jpg",
    },
  ];

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  // Convert image to base64
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (newReview && name) {
      // Dispatching the review submission
      dispatch(postReview({ name, content: newReview, profilePic }));

      // Clearing the form fields
      setNewReview("");
      setName("");
      setProfilePic(null);

      // Show success SweetAlert
      Swal.fire({
        icon: "success",
        title: "Thank you for your review!",
        text: "Your review has been submitted successfully.",
        showConfirmButton: true,
        confirmButtonColor: "#FF5733",
      });
    } else {
      // Show error SweetAlert if any field is missing
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all the fields before submitting.",
        showConfirmButton: true,
        confirmButtonColor: "#FF5733",
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 50%, #0f0f0f 100%)",
        backgroundSize: "cover",
        paddingTop: 5,
        paddingBottom: 15,
      }}
    >
      {/* Top Banner Carousel */}
      <Carousel
        sx={{ width: { xs: "100%", md: "80%" }, mx: "auto", borderRadius: 3 }}
        interval={2500}
        indicators={false}
        navButtonsAlwaysInvisible={true}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: 300, sm: 400, md: 500 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#FAFAFA",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                bottom: { xs: "10%", sm: "15%" },
                px: { xs: 2, sm: 4 },
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent)",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                width: "100%",
                fontWeight: "bold",
              }}
            >
              {slide.text}
            </Typography>
          </Box>
        ))}
      </Carousel>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={4}
          sx={{
            backgroundColor: "#333",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 2,
            p: 4,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Review Cards Carousel */}
          <Box flex={1} sx={{ width: "100%", maxWidth: 480 }}>
            <Carousel
              autoPlay
              interval={3000}
              indicators={false}
              navButtonsAlwaysInvisible={true}
              sx={{ width: "100%" }}
            >
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <Card
                    key={index}
                    sx={{
                      height: { xs: 350, sm: 500 },
                      p: 2,
                      backgroundColor: "rgba(33, 33, 33, 0.6)",
                      borderRadius: 3,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardContent>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        spacing={2}
                      >
                        <Typography
                          sx={{
                            fontSize: "1.6rem",
                            textAlign: "center",
                            color: "#fafafa",
                            mt: 5,
                          }}
                        >
                          Hear from Our Students
                        </Typography>
                        <Grid item>
                          <Avatar
                            src={review.profilePic}
                            alt={review.name}
                            sx={{
                              mt: 5,
                              width: { xs: 80, sm: 120 },
                              height: { xs: 80, sm: 120 },
                              border: "2px solid #FF5733",
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" color="#FAFAFA">
                            {review.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Rating
                            value={review.rating}
                            readOnly
                            sx={{ fontSize: 28 }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" color="#FAFAFA">
                            {review.content}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography variant="body1" color="text.secondary">
                  No reviews available.
                </Typography>
              )}
            </Carousel>
          </Box>

          {/* Form Section with Image Upload */}
          <Box
            flex={1}
            sx={{
              maxWidth: 480,
              p: 4,
              backgroundColor: "rgba(33, 33, 33, 0.6)",
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h4"
              color="#FAFAFA"
              sx={{ mb: 2, textAlign: "center" }}
            >
              Share your review!
            </Typography>
            <TextField
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{
                mt: 2,
                mb: 2,
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#1F1F1F",
                  borderRadius: 2,

                  color: "#FFFFFF",
                  "& fieldset": { borderColor: "#FF5733" },
                },
              }}
              InputLabelProps={{
                style: { color: "#FAFAFA" }, // Label color
              }}
            />

            <TextField
              label="Your Review"
              multiline
              rows={4}
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#1F1F1F",
                  borderRadius: 2,

                  color: "#FFFFFF",
                  "& fieldset": { borderColor: "#FF5733" },
                },
              }}
              InputLabelProps={{
                style: { color: "#FAFAFA" }, // Label color
              }}
            />
            <Box sx={{ px: 2, mt: 3, display: "flex", gap: 3 }}>
              <Typography color="#FAFAFA" sx={{ fontSize: "1.4rem", mb: 2 }}>
                How would you rate us?
              </Typography>
              <Rating
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                sx={{
                  fontSize: 32,
                  color: "#ffffff",
                  "& .MuiRating-iconFilled": {
                    color: "#FFD700",
                  },
                  "& .MuiRating-iconHover": {
                    color: "#FFD700",
                  },
                  "& .MuiRating-iconEmpty": {
                    color: "#ffffff",
                  },
                }}
              />
            </Box>

            <Box display="flex" alignItems="center" gap={2} sx={{ mt: 3 }}>
              <input
                id="profile-pic-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <Avatar
                src={profilePic}
                sx={{
                  width: 64,
                  height: 64,
                  border: "2px solid #FF5733",
                  cursor: "pointer",
                }}
                onClick={() =>
                  document.getElementById("profile-pic-upload").click()
                }
              />
              <Typography variant="body2" color="#FAFAFA">
                Upload Profile Picture
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleSubmit}
              fullWidth
              sx={{
                mt: 4,
                background: userId
                  ? "linear-gradient(135deg, #e50914, #b00020)"
                  : "#A9A9A9", // Set to gray when disabled
                "&:disabled": {
                  bgcolor: "#A9A9A9", // Ensure gray when disabled
                },
              }}
              disabled={!userId} // Disable button if userId is not available
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewComponent;
