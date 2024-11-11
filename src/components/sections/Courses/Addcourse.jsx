// src/components/addCourse.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Swal from "sweetalert2";
import { fetchCategories } from "../../redux/slice/categoryslice";
import { addCourse } from "../../redux/slice/courseslice";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const categories = useSelector((state) => state.categories.categories);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(
      addCourse({
        ...data,
        category_name: selectedCategory,
        image: imageBase64,
      })
    );
    Swal.fire({
      icon: "success",
      title: "Course Added",
      text: "The course has been successfully added!",
      confirmButtonText: "OK",
      confirmButtonColor: "#E50914",
    }).then(() => {
      reset();
      setSelectedCategory("");
      setImageBase64("");
    });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/images/addcourse.jpg')", // path to your image
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        px: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: isSmallScreen ? "100%" : 600,
          width: "100%",
          p: 3,
          background: "linear-gradient(135deg, #fef9e4 0%, #b3cde0 100%)",
          color: "#121212",

          borderRadius: 5,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: "#333", fontSize: "1.8rem", fontWeight: "bold", py: 2 }}
        >
          Add New Course
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Course Title"
              fullWidth
              {...register("title", { required: "Course title is required" })}
              error={!!errors.title}
              helperText={errors.title?.message}
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              error={!!errors.category_name}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            >
              <InputLabel sx={{ color: "#121212" }}>Category Name</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                displayEmpty
                sx={{
                  color: "#121212",
                  "& .MuiSvgIcon-root": { color: "#121212" },
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.category_name && (
                <Typography variant="caption" color="error">
                  {errors.category_name.message}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subcategory"
              fullWidth
              {...register("subcategory")}
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Price"
              type="number"
              fullWidth
              {...register("price", { required: "Price is required" })}
              error={!!errors.price}
              helperText={errors.price?.message}
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Release Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true, style: { color: "#121212" } }}
              {...register("release_date", {
                required: "Release date is required",
              })}
              error={!!errors.release_date}
              helperText={errors.release_date?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Rating"
              type="number"
              fullWidth
              {...register("rating", {
                required: "Rating is required",
                min: 0,
                max: 5,
              })}
              error={!!errors.rating}
              helperText={errors.rating?.message}
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Instructor"
              fullWidth
              {...register("instructor", {
                required: "Instructor is required",
              })}
              error={!!errors.instructor}
              helperText={errors.instructor?.message}
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Platform"
              fullWidth
              {...register("platform", { required: "Platform is required" })}
              error={!!errors.platform}
              helperText={errors.platform?.message}
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ marginTop: 10, color: "#121212" }}
              />
              {imageBase64 && (
                <img
                  src={imageBase64}
                  alt="Course Preview"
                  style={{
                    width: "100%",
                    marginTop: 10,
                    borderRadius: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            borderRadius: "8px",
            padding: "12px",
            background: "linear-gradient(135deg, #e50914, #b00020)",
            "&:hover": {
              bgcolor: "#ff0033",
              transition: "background-color 0.3s ease-in-out",
            },
            color: "#FAFAFA",
            fontWeight: "bold",
          }}
        >
          Add Course
        </Button>
      </Box>
    </Box>
  );
};

export default AddCourse;
