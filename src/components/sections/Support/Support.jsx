import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { postContactQuery } from "../../redux/slice/queryslice";

const SupportPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { loading, error } = useSelector((state) => state.support);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: "Oops!",
        text: "Please fill out all fields before submitting.",
        icon: "warning",
        confirmButtonText: "Okay",
        confirmButtonColor: "#d33",
        background: "#fff3cd",
        color: "#856404",
        padding: "20px",
      });
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please provide a valid email address.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#d33",
        background: "#f8d7da", // Customize background color
        color: "#721c24", // Text color
        padding: "20px", // Padding for alert
      });
      return;
    }

    dispatch(postContactQuery(formData));
    setSubmitSuccess(true);

    Swal.fire({
      title: "Success!",
      text: "Your query has been submitted.",
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#28a745", // Green success color
      background: "#d4edda", // Customize background color
      color: "#155724", // Text color
      padding: "20px", // Padding for alert
    });
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 50%, #0f0f0f 100%)",
        backgroundSize: "cover",
        color: "#fff",
        fontFamily: "Segoe UI",
        textAlign: "center",
        p: { xs: 4, sm: 6, md: 10 },
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={4}
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
          color: "#FAFAFA",
        }}
      >
        Welcome to SkillForge User Support
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <Typography variant="body1" sx={{ mr: 1 }}>
          Server Status:
        </Typography>
        <Typography variant="body1" fontWeight="bold" color="green">
          ALL SYSTEMS OPERATIONAL
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        mb={8}
        px={{ xs: 2, sm: 4, md: 8 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          onClick={() => navigate("/categories")}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Courses
          </Typography>
          <Box
            component="img"
            src="assets/images/courses.jpg"
            alt="Courses"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 220, md: 250 },
              objectFit: "cover",
              borderRadius: 3,
              backgroundColor: "#1E1E1E",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              mt: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} onClick={() => navigate("/account")}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Accounts
          </Typography>
          <Box
            component="img"
            src="assets/images/account.jpg"
            alt="Accounts"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 220, md: 250 },
              objectFit: "cover",
              borderRadius: 3,
              backgroundColor: "#1E1E1E",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              mt: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} onClick={() => navigate("/parent")}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Parent/Guardian Support
          </Typography>
          <Box
            component="img"
            src="assets/images/parent.jpg"
            alt="Parent Support"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 220, md: 250 },
              objectFit: "cover",
              borderRadius: 3,
              backgroundColor: "#1E1E1E",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              mt: 2,
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        mb={8}
        px={{ xs: 2, sm: 4, md: 8 }}
      >
        <Grid item xs={12} sm={6} md={4} onClick={() => navigate("/review")}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Community
          </Typography>
          <Box
            component="img"
            src="assets/images/review.webp"
            alt="Community"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 220, md: 250 },
              objectFit: "cover",
              borderRadius: 3,
              backgroundColor: "#1E1E1E",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              mt: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} onClick={() => navigate("/payment")}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Payments
          </Typography>
          <Box
            component="img"
            src="assets/images/payment.jpg"
            alt="Payments"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 220, md: 250 },
              objectFit: "cover",
              borderRadius: 3,
              backgroundColor: "#1E1E1E",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              mt: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} onClick={() => navigate("/about")}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            About Us
          </Typography>
          <Box
            component="img"
            src="assets/images/about.jpg"
            alt="About Us"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 220, md: 250 },
              objectFit: "cover",
              borderRadius: 3,
              backgroundColor: "#1E1E1E",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              mt: 2,
            }}
          />
        </Grid>
      </Grid>

      {/* Contact Us Section */}
      <Box sx={{ px: 8 }}>
        <Box
          sx={{
            mt: 10,

            backgroundColor: "#1E1E1E",
            borderRadius: 2,
            p: 5,
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            variant="h4"
            mb={2}
            sx={{
              fontSize: { xs: "1.8rem", sm: "2rem" },
              fontWeight: "bold",
              color: "#E50914",
            }}
          >
            Have Any Questions?
          </Typography>
          <Typography variant="body1" mb={4} color="#FAFAFA">
            Feel free to reach out to us. We're here to help you!
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Send Us a Message
              </Typography>
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
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
              <TextField
                name="email"
                label="Your Email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
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
              <TextField
                name="message"
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={formData.message}
                onChange={handleChange}
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
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  background: "linear-gradient(135deg, #0096c7, #005f73)",
                }}
                onClick={handleSubmit}
                disabled={loading}
              >
                Submit
              </Button>
              {submitSuccess && (
                <Typography color="success.main" mt={2}>
                  Thank you! Your message has been successfully sent.
                </Typography>
              )}
              {error && (
                <Typography color="error" mt={2}>
                  {error}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>

        {/* Company Map Section */}
        <Box
          sx={{
            mt: 10,
            p: 3,
            backgroundColor: "#1E1E1E",
            borderRadius: 2,
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={2}
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.8rem" },
              color: "#fafafa",
            }}
          >
            "Your Next Destination Awaits"
          </Typography>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.293674794159!2d88.42368324907328!3d22.576357221821368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275eff23edf37%3A0xdc56c0a757ecff53!2sWebskitters%20Academy!5e0!3m2!1sen!2sus!4v1731136274101!5m2!1sen!2sus"
            width="100%"
            sx={{
              height: { xs: "200px", md: "300px", lg: "400px" },
              borderRadius: "8px",
            }}
            allowFullScreen
            loading="lazy"
            title="Company Location"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SupportPage;
