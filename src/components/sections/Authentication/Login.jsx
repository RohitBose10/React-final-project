import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { login } from "../../redux/slice/authenticationslice";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data)).then((result) => {
      const { id } = result.payload;
      if (result.meta.requestStatus === "fulfilled") {
        Swal.fire({
          title: "Welcome Back!",
          text: "Login successful.",
          icon: "success",
        });
        navigate(`/profile/${id}`);
      } else if (result.meta.requestStatus === "rejected") {
        Swal.fire({
          title: "Oops!",
          text: "Invalid email or password. Please try again!",
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
        paddingBottom: 10,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          background: "linear-gradient(135deg, #fef9e4 0%, #b3cde0 100%)", // Soft cream to powder blue
          p: 4,
          borderRadius: 4,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Logo */}

          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333", mb: 2, mt: 5 }}
          >
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                background: "linear-gradient(135deg, #e50914, #b00020)",
                color: "#fafafa",
                fontWeight: "bold",
                borderRadius: "8px",
                "&:hover": {
                  transition: "background-color 0.3s ease-in-out",
                },
                padding: "12px",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{ color: "#333", mt: 3, fontSize: "16px" }}
            align="center"
          >
            New to SkillForge?{" "}
            <Link
              to="/register"
              style={{
                color: "#FF4B2B", // Matching link color with the button
                textDecoration: "none",
              }}
            >
              Create an Account
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
