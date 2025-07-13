import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/slice/authenticationslice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);
  const {
    register: registerField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [profileImage, setProfileImage] = useState(null);
  const [country, setCountry] = useState("");

   useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      navigate("/");
    }
  }, [navigate]);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      role: "user",
      country, // Default role
      profileImage,
    
     
    };
    dispatch(register(formData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        Swal.fire({
          title: "Account Created!",
          text: "Your account has been successfully created.",
          icon: "success",
          confirmButtonColor: "#ff5252",
          confirmButtonText: "Okay",
        }).then(() => navigate("/login"));
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Registration failed.",
          icon: "error",
        });
      }
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 50%, #0f0f0f 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 10,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          background: "linear-gradient(135deg, #fef9e4 0%, #b3cde0 100%)",
          p: 4,
          borderRadius: 4,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333", mb: 2, mt: 5 }}
          >
            Create Account
          </Typography>

          {error && (
            <Typography color="error" mt={2} align="center">
              {error}
            </Typography>
          )}

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            {/* Country Dropdown */}
            <FormControl
              fullWidth
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            >
              <InputLabel>Add your country</InputLabel>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                label="Country"
                required
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="China">China</MenuItem>
                <MenuItem value="Russia">Russia</MenuItem>
              </Select>
            </FormControl>

            <TextField
              {...registerField("firstName")}
              label="First Name"
              fullWidth
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <TextField
              {...registerField("lastName")}
              label="Last Name"
              fullWidth
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <TextField
              {...registerField("username")}
              label="Username"
              fullWidth
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <TextField
              {...registerField("email")}
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <TextField
              {...registerField("password")}
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <TextField
              {...registerField("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              required
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <TextField
              {...registerField("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed for the mobile number",
                },
              })}
              label="Mobile Number"
              fullWidth
              margin="normal"
              required
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />

            <TextField
              {...registerField("dob")}
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />

            <Box display="flex" alignItems="center" mt={2}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="image-upload"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="image-upload">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<PhotoCamera />}
                  sx={{
                    bgcolor: "#f9f9f9",
                    color: "black",
                    borderColor: "#ccc",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  Upload Profile Picture
                </Button>
              </label>
              {profileImage && (
                <Typography
                  variant="body2"
                  sx={{ color: "green", ml: 1, fontWeight: "bold" }}
                >
                  Image uploaded
                </Typography>
              )}
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                background: "linear-gradient(135deg, #e50914, #b00020)",
                color: "#FAFAFA",
                fontWeight: "bold",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "#ff0033",
                  transition: "background-color 0.3s ease-in-out",
                },
                padding: "12px",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <Typography
            variant="body2"
            align="center"
            mt={3}
            color="#333"
            sx={{ fontSize: "16px" }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#e50914" }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
